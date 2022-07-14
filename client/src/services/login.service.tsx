import axios from '../api/axios'
import IUser from '../types'
import localStorageService from './localStorage.service'

const SignUpService = (data: IUser) => axios.post<IUser>('/signup', data)

const LoginService = (data: IUser) => axios.post<IUser>('/login', data)

const Logout = () => axios.post<IUser>('/logout')

axios.interceptors.request.use(
	(config) => {
		const token = localStorageService().get('token')
		if (token) {
			const configWithToken = { ...config, headers: { Authorization: `Bearer ${token}` } }
			return configWithToken.headers.Authorization ? configWithToken : config
		}
		return config
	},
	(error) => {
		Promise.reject(error)
	},
)
export { SignUpService, LoginService, Logout }
