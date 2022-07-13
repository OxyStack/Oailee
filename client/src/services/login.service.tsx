import axios from '../api/axios'
import IUser from '../types'

const SignUpService = (data: IUser) => axios.post<IUser>('/signup', data)

const LoginService = (data: IUser) => axios.post<IUser>('/login', data)

const Logout = () => axios.post<IUser>('/logout')

export { SignUpService, LoginService, Logout }
