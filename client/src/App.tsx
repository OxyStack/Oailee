import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, About, Dashboard, Profile, SignUp, Login } from './views'

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/login" element={<Login />} />
			<Route path="*" element={<Home />} />
		</Routes>
	</BrowserRouter>
)

export default App
