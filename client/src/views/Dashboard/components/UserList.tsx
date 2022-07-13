import { useState, useEffect } from 'react'
import axios from '../../../api/axios'

const UserList = () => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		let mounted = true
		const controller = new AbortController()

		const getUsers = async () => {
			try {
				const response = await axios.get('/getusers', { signal: controller.signal })
				// eslint-disable-next-line @typescript-eslint/no-unused-expressions
				mounted && setUsers(response.data)
			} catch (error) {
				// console.log(error)
			}
		}
		getUsers()

		return () => {
			mounted = false
			controller.abort()
		}
	}, [])

	return (
		<div>
			<h1>User List</h1>
			<ul>
				{users?.length ? (
					<ul>
						{users.map((user: any, i) => (
							// eslint-disable-next-line react/no-array-index-key
							<li key={i}>{user.username}</li>
						))}
					</ul>
				) : (
					<p>Loading...</p>
				)}
			</ul>
		</div>
	)
}

export default UserList
