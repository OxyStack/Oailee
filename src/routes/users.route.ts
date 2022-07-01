import express from 'express'
import { User } from '../models/user.model'
import bcrypt from 'bcrypt'
import {
	JWT_EXPIRATION,
	JWT_SECRET,
	MAX_USER_LENGTH,
	MIN_PASSWORD_LENGTH,
	MIN_USER_LENGTH,
	SALT_ROUNDS,
} from '../constants'
import jwt from 'jsonwebtoken'
import { myType } from '../types'

const router = express.Router()

router.get('/users', async (_, res) => {
	res.status(200).send(await User.find())
})

router.post('/signup', async (req: myType['req'], res) => {
	const { username, password, email, firstName, lastName } = req.body

	if (!username || !password || !email) {
		res.status(400).send({ message: 'Missing required fields' })
		return
	}
	//todo check if username is already taken in a single db query
	const userName = await User.findOne({ where: { username } })
	const userEmail = await User.findOne({ where: { email } })

	if (userName || userEmail) {
		res.status(400).send({ message: 'Username or email already taken' })
		return
	}

	const newUser = new User()
	newUser.firstName = firstName
	newUser.lastName = lastName

	if (username.length <= MIN_USER_LENGTH && username.length > MAX_USER_LENGTH) {
		res.status(400).send({
			message: 'Username must be at least 4 characters and less than 20 characters',
		})

		return
	}

	if (username.includes(' ')) {
		res.status(400).send({ message: 'Username cannot contain spaces' })
		return
	}

	newUser.username = username

	if (password.length <= MIN_PASSWORD_LENGTH) {
		res.status(400).send({ message: 'Password must be at least 8 characters' })
		return
	}

	const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
	newUser.password = hashedPassword

	newUser.email = email

	const tokenAccess = jwt.sign({ username, password }, JWT_SECRET, { expiresIn: JWT_EXPIRATION })

	req.session.tokenAccess = tokenAccess

	await newUser.save()
	res.status(201).send({ newUser, tokenAccess })
})

router.patch('/update-user', async (req, res) => {
	const { username, newUsername, password, newPassword, email, firstName, lastName } = req.body

	if (!username || !password) {
		res.status(400).send({ message: 'You must provide a valid username and a password' })
		return
	}

	const user = await User.findOne({ where: { username } })
	if (!user) {
		res.status(404).send({ message: 'User not found' })
		return
	}

	const verifyPass = await bcrypt.compare(password, user.password)
	if (!verifyPass) {
		res.status(403).send({ message: 'Incorrect password' })
		return
	}

	if (firstName) {
		user.firstName = firstName
	}

	if (lastName) {
		user.lastName = lastName
	}

	if (email) {
		user.email = email
	}

	if (newUsername) {
		if (newUsername.length <= MIN_USER_LENGTH && newUsername.length > MAX_USER_LENGTH) {
			res.status(400).send({
				message: 'Username must be at least 4 characters and less than 20 characters',
			})

			return
		}

		if (newUsername.includes(' ')) {
			res.status(400).send({ message: 'Username cannot contain spaces' })
			return
		}

		user.username = newUsername
	}

	if (newPassword) {
		if (newPassword.length <= MIN_PASSWORD_LENGTH) {
			res.status(400).send({ message: 'Password must be at least 8 characters' })
			return
		}

		const hashedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS)
		user.password = hashedPassword
	}

	await user.save()
	res.status(200).send(user)
})

router.delete('/delete-user', async (req, res) => {
	const { username } = req.body
	if (!username) {
		res.status(400).send({ message: 'Missing required fields' })
		return
	}

	const user = await User.findOne({ where: { username } })
	if (!user) {
		res.status(404).send({ message: 'User not found' })
		return
	}

	await user.remove()
	res.status(200).send({ message: true })
})

router.post('/login', async (req: myType['req'], res) => {
	const { username, password } = req.body
	if (!username || !password) {
		res.status(400).send({ message: 'Missing required fields' })
		return
	}

	const user = await User.findOne({ where: { username } })
	if (!user) {
		res.status(404).send({ message: 'User not found' })
		return
	}

	const verifyPass = await bcrypt.compare(password, user.password)
	if (!verifyPass) {
		res.status(403).send({ message: 'Incorrect password' })
		return
	}

	const tokenAccess = jwt.sign({ username, password }, JWT_SECRET, { expiresIn: JWT_EXPIRATION })

	req.session.tokenAccess = tokenAccess

	res.status(200).send(user)
})

router.get('/me', async (req: myType['req'], res) => {
	const { tokenAccess } = req.session

	if (!tokenAccess) {
		res.status(401).send({ message: 'You are not logged in' })
		return
	}

	const { username } = jwt.verify(tokenAccess, JWT_SECRET) as { username: string }
	const user = await User.findOne({ where: { username } })
	if (!user) {
		res.status(404).send({ message: 'User not found' })
		return
	}

	res.status(200).send(user)
})

router.post('/logout', async (req: myType['req'], res) => {
	const { tokenAccess } = req.session
	if (!tokenAccess) {
		res.status(401).send({ message: 'You are not logged in' })
		return
	}

	req.session.destroy(error => console.error(error))
	res.status(200).send({ message: true })
})

module.exports = router
