import { Navbar, Menu, Button, Hero } from 'react-daisyui'
import { Copyright, Footer } from '../../components'
import logo from '../../assets/Oailee_logo.svg'
import bg_circle from './assets/circle.svg'
import hero from './assets/hero.svg'
import home_pg from './assets/pagee.png'
import profile from './assets/profile.svg'
import card from './assets/card.svg'

const Home = () => (
	<div
		className="px-12"
		style={{
			background:
				'linear-gradient(61deg, rgba(14, 22, 41, 1) 0%, rgba(14, 22, 41, 1) 48%, rgba(14, 22, 41, 1) 63%, rgba(24, 25, 74, 1) 75%, rgba(22, 23, 68, 1) 88%, rgba(14, 22, 41, 1) 100%)',
		}}
	>
		<div className="flex">
			<Navbar className="z-10">
				<Navbar.Start>
					<div className="">
						<img src={logo} className="max-w-sm w-28" alt="" />
					</div>
					<Menu horizontal className="p-3 px-7">
						<Menu.Item>
							<a href="/about">About</a>
						</Menu.Item>
						<Menu.Item>
							<a href="/FAQ">FAQ</a>
						</Menu.Item>
						<Menu.Item>
							<a href="/contact">Contact</a>
						</Menu.Item>
					</Menu>
				</Navbar.Start>
				<Navbar.End className="">
					<Menu horizontal className="p-3">
						<Menu.Item>
							<a href="/login">Login</a>
						</Menu.Item>
						<Menu.Item>
							<Button className="rounded-full" href="/SignUp">
								Sign up
							</Button>
						</Menu.Item>
					</Menu>
				</Navbar.End>
			</Navbar>
		</div>

		<Hero className="">
			<div className="absolute left-80">
				<img className="bg  h-full object-cover" src={bg_circle} alt="" />
			</div>
			<Hero.Content className="flex-row-reverse">
				<img src={hero} alt="" className="max-w-sm rounded-md shadow-3xl" />
				<div>
					<h1 className="text-5xl font-bold ">
						There is no one <br /> who loves pain...
					</h1>
					<p className="my-5">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
						deleniti eaque aut repudiandae et a id nisi.
					</p>
					<Button color="primary" className=" w-40 transition-colors">
						Get Started
					</Button>
				</div>
			</Hero.Content>
		</Hero>
		<Hero className="pt-20 ">
			<Hero.Content className="">
				<img src={home_pg} alt="" className="w-80 rounded-md -skew-y-3 pt-10 pr-10" />
				<div className="px-5">
					<h1 className="text-4xl font-bold">Create your own design!</h1>
					<p className="py-5">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
						deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut
						assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
					</p>
					<div className="pt-3">
						<Button color="accent" className="transition-colors w-40">
							Create
						</Button>
					</div>
				</div>
			</Hero.Content>
		</Hero>

		<div className="py-10 pl-20 grid grid-rows grid-flow-col justify-center">
			<div>
				<img src={card} alt="" className="max-w-md " />
			</div>
			<div>
				<img src={profile} alt="" className="w-9/12 pt-10" />
			</div>
		</div>

		<Footer />
		<Copyright />
	</div>
)

export default Home
