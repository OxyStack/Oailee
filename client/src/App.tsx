import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, About, Dashboard, Profile, SignUp, SignIn } from './views'
import { Footer, Header, Navbar } from './components'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/Profile" element={<Profile />} />
				<Route path="/SignUp" element={<SignUp />} />
				<Route path="/SignIn" element={<SignIn />} />
				<Route path="/Header" element={<Header />} />
				<Route path="/Navbar" element={<Navbar />} />
				<Route path="/Footer" element={<Footer />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
