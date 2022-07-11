import http from '../api/axios'
import IUser from '../types'

class SignupService {
	// eslint-disable-next-line class-methods-use-this
	createUser(data: IUser) {
		return http.post<IUser>('/signup', data)
	}
}

export default new SignupService()
