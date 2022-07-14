import axios from '../api/axios'
import IUser from '../types'
import localStorageService from './localStorage.service'

const SignUpService = (data: IUser) => axios.post<IUser>('/signup', data)

const LoginService = (data: IUser) => axios.post<IUser>('/login', data)

const Logout = () => axios.post<IUser>('/logout')

axios.interceptors.request.use(
	(config) => {
		const token = localStorageService().get('token')
		console.log(token)
		if (token && config && config.headers) {
			// eslint-disable-next-line no-param-reassign
			config.headers.Authorization = `Bearer ${token}`
			console.log(config.headers)
		}
		return config
	},
	(error) => {
		Promise.reject(error)
	},
)
export { SignUpService, LoginService, Logout }
