import React from 'react'
import axios from 'axios'
import API_URL from '../../../constants'

export default class UserList extends React.Component {
	// eslint-disable-next-line react/state-in-constructor
	state = {
		users: [],
	}

	componentDidMount() {
		axios.get(`${API_URL}/getusers`).then((res) => {
			const users = res.data
			this.setState({ users })
		})
	}

	render() {
		return (
			<ul>
				{/* eslint-disable-next-line react/destructuring-assignment */}
				{this.state.users.map((user: any) => (
					<li key={user.id}>
						{user.username}
						{user.email}{' '}
					</li>
				))}
			</ul>
		)
	}
}
