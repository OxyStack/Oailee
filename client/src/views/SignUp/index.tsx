import { Component, ChangeEvent } from 'react'
import IUser from '../../types'
import SignupService from '../../services/signup.service'

type Props = {}
type State = IUser & {
	submited: boolean
}

export default class SignUp extends Component<Props, State> {
	constructor(props: Props) {
		super(props)
		this.onChangeUsername = this.onChangeUsername.bind(this)
		this.onChangePassword = this.onChangePassword.bind(this)
		this.onChangeEmail = this.onChangeEmail.bind(this)
		this.state = {
			username: '',
			password: '',
			email: '',
			submited: false,
		}
	}

	onChangeUsername(e: ChangeEvent<HTMLInputElement>) {
		this.setState({ username: e.target.value })
	}

	onChangePassword(e: ChangeEvent<HTMLInputElement>) {
		this.setState({ password: e.target.value })
	}

	onChangeEmail(e: ChangeEvent<HTMLInputElement>) {
		this.setState({ email: e.target.value })
	}

	saveUser() {
		const { username, password, email } = this.state

		SignupService.createUser({ username, password, email })
			.then(() => {
				this.setState({ submited: true })
			})
			.catch(() => {
				this.setState({ submited: false })
			})
	}

	render() {
		const { username, password, email, submited } = this.state
		return (
			<div>
				<h1>Sign Up</h1>
				<div>
					<label>
						Username
						<input type="text" value={username} onChange={this.onChangeUsername} />
					</label>
				</div>
				<div>
					<label>
						Password
						<input type="password" value={password} onChange={this.onChangePassword} />
					</label>
				</div>
				<div>
					<label>
						Email
						<input type="email" value={email} onChange={this.onChangeEmail} />
					</label>
				</div>

				<button type="submit" onClick={() => this.saveUser()}>
					Sign Up
				</button>
				{submited && <div>User created</div>}
			</div>
		)
	}
}
