import { Breadcrumbs, Button, Form, Hero, Input, Link } from 'react-daisyui'
import Copyright from '../../components/Copyright'
import signInBg from '../../assets/sign-in-bg.svg'

function SignIn() {
	return (
		<Hero>
			<Hero.Content className="grid grid-cols-2 w-full h-screen">
				<div className="flex flex-col align-items-center w-96 justify-self-center">
					<Breadcrumbs className="self-start mb-5">
						<Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
						<Breadcrumbs.Item>Sign In</Breadcrumbs.Item>
					</Breadcrumbs>
					<Form>
						<h1 className="text-2xl font-bold mb-5">Sign In</h1>
						<Form.Label title="Email" className="text-primary" />
						<Input type="text" placeholder="email" className="input-bordered" autoComplete="on" />
						<Form.Label title="Password" className="mt-4" />
						<Input type="password" placeholder="password" className="input-bordered" />
						<Form.Label>
							<Link href="/forgot-password" className="label-text-alt" hover>
								Forgot password?
							</Link>
						</Form.Label>
						<Button className="mt-4 bg-primary text-gray-200">Login</Button>
					</Form>
				</div>
			</Hero.Content>
			<div className="block tablet:none h-screen justify-self-end ">
				<img className="opacity-50 h-screen " src={signInBg} alt="bg" />
			</div>
			<Copyright />
		</Hero>
	)
}

export default SignIn
