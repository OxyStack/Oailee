/* eslint-disable indent */
import { Formik, Form as FormikForm, Field } from 'formik'
import * as Yup from 'yup'
import { Button, Hero, Form, Card, Breadcrumbs, Link } from 'react-daisyui'
import Copyright from '../../components/Copyright'
import { LoginService } from '../../services/login.service'
import loginBg from '../../assets/login-bg.svg'

const LoginSchema = Yup.object().shape({
	username: Yup.string().required('Required'),
	password: Yup.string().required('Required'),
})

const validateUsername = (value: string) => {
	let error
	const input = value.toLowerCase()
	if (input === 'admin' || input === 'root' || input === 'administrator') {
		error = 'Nice try!'
	}
	return error
}

const state = {
	resStatus: +'',
	resMessage: '',
}

const login = () => {
	return (
		<Hero>
			<div className=" grid grid-cols-2 w-full">
				<Card className=" w-96 laptop:w-auto self-center justify-self-center mb-5">
					<Card.Body>
						<Breadcrumbs className="self-start mb-10">
							<Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
							<Breadcrumbs.Item>Login</Breadcrumbs.Item>
						</Breadcrumbs>
						<h1 className="text-2xl font-bold mb-5">Login</h1>
						<Formik
							initialValues={{
								username: '',
								password: '',
							}}
							validationSchema={LoginSchema}
							onSubmit={(values, { setSubmitting }) => {
								LoginService(values)
									.then(() => {
										window.location.href = '/dashboard'
									})
									.catch((err) => {
										state.resStatus = err.response.status
										state.resMessage = err.response.data.message
										setSubmitting(false)
									})
							}}
						>
							{({ errors, touched }) => (
								<FormikForm className="flex flex-col gap-2">
									<Form.Label title="Username" className="-mb-2" />
									<Field
										name="username"
										type="text"
										className="input input-bordered w-full max-w-xs"
										placeholder="Between 4 and 20 characters"
										autoComplete="off"
										validate={validateUsername}
									/>
									{errors.username && touched.username ? (
										<span className="label -mt-2 text-sm text-red-400">{errors.username}</span>
									) : null}
									<Form.Label title="Password" className="-mb-2" />
									<Field
										name="password"
										type="password"
										className="input input-bordered w-full max-w-xs"
										placeholder="Min 8 characters"
										autoComplete="off"
									/>
									{errors.password && touched.password ? (
										<span className="label -mt-2 text-sm text-red-400">{errors.password}</span>
									) : null}{' '}
									<Button type="submit" className="mt-5 bg-primary text-gray-200">
										Login
									</Button>
									<span className="text-sm text-red-400">{state.resMessage}</span>
									<span className="text-sm text-gray-400 mt-4">
										Not registered yet?
										<Link href="/signup" className="mt-5 text-neutral-content">
											{' '}
											Sign Up
										</Link>
									</span>
								</FormikForm>
							)}
						</Formik>
					</Card.Body>
				</Card>
				<aside className="block tablet:none h-screen justify-self-end ">
					<img className="opacity-50 h-full object-cover rounded-bl-3xl" src={loginBg} alt="bg" />
				</aside>
			</div>
			<Copyright />
		</Hero>
	)
}
export default login
