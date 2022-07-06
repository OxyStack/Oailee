import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, About, Dashboard, Profile, SignUp, SignIn } from './views'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/sign-in" element={<SignIn />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
