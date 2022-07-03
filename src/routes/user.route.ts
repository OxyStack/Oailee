import express from 'express'

export const router = express.Router()

import {
	getUsers,
	signup,
	updateUser,
	deleteUser,
	login,
	me,
	logout,
} from '../controllers/user.contr'

router.get('/getusers', getUsers)
router.post('/signup', signup)
router.patch('/updateuser', updateUser)
router.delete('/deleteuser', deleteUser)
router.post('/login', login)
router.post('/me', me)
router.post('/logout', logout)
