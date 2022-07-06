import { Button } from 'react-daisyui'
import { Navbar } from '../../components'

function Dashboard() {
	return (
		<div>
			<Navbar />
			<h1>Dashboard</h1>
			<Button color="primary">Click me</Button>
		</div>
	)
}

export default Dashboard
