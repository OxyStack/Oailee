import express from 'express'
import {
	getUsers,
	signUp,
	updateUser,
	deleteUser,
	login,
	me,
	logout,
} from '../controllers/user.contr'

export const router = express.Router()

router.get('/api/getusers', getUsers)
router.post('/api/signup', signUp)
router.patch('/api/updateuser', updateUser)
router.delete('/api/deleteuser', deleteUser)
router.post('/api/login', login)
router.post('/api/me', me)
router.post('/api/logout', logout)
