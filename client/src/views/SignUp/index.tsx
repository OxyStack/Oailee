import { Formik, Form as FormikForm, Field } from 'formik'
import * as Yup from 'yup'
import { Button, Hero, Form, Card, Breadcrumbs, Link } from 'react-daisyui'
import { Navigate, Route } from 'react-router-dom'
import { Copyright } from '../../components'
import { SignUpService } from '../../services/login.service'
import loginBg from '../../assets/login-bg.svg'

const SignupSchema = Yup.object().shape({
	username: Yup.string()
		.min(4, 'Must be 4 characters or more')
		.max(20, 'Must be 20 characters or less')
		.required('Required'),
	email: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string()
		.min(8, 'Must be 8 characters or more')
		.max(50, 'Must be 50 characters or less')
		.required('Required')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,50}$/,
			'Must contain at least one number, one uppercase letter, one lowercase letter, and one special character like @$!%*?&#^',
		),
})

const validateUsername = (value: string) => {
	let error
	const input = value.toLowerCase()
	if (input === 'admin' || input === 'root' || input === 'administrator') {
		error = 'Nice try!'
	}
	if (input.includes(' ')) {
		error = 'No spaces allowed!'
	}
	return error
}

const state = {
	resStatus: '',
	resMessage: '',
}

const signUp = () => (
	<Hero>
		<div className="grid grid-cols-2 w-full">
			<Card className=" w-96 laptop:w-auto self-center justify-self-center mb-5">
				<Card.Body>
					<Breadcrumbs className="self-start mb-10">
						<Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
						<Breadcrumbs.Item>Sign Up</Breadcrumbs.Item>
					</Breadcrumbs>
					<h1 className="text-2xl font-bold mb-5">Sign Up</h1>
					<Formik
						initialValues={{
							username: '',
							email: '',
							password: '',
						}}
						validationSchema={SignupSchema}
						onSubmit={(value, { setSubmitting }) => {
							setSubmitting(true)
							SignUpService(value)
								.then(() => <Route path="/signup" element={<Navigate to="/signup/success" />} />)
								.catch((err) => {
									setSubmitting(false)
									state.resStatus = err.response.status
									state.resMessage = err.response.data.message
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
								<Form.Label title="Email" className="-mb-2" />
								<Field
									name="email"
									type="email"
									className="input input-bordered w-full max-w-xs"
									placeholder="mail@example.com"
									autoComplete="off"
								/>
								{errors.email && touched.email ? (
									<span className="label -mt-2 text-sm text-red-400">{errors.email}</span>
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
								) : null}
								<Button type="submit" className="mt-5 bg-primary text-gray-200">
									Create account
								</Button>
								<span className="text-sm text-red-400">{state.resMessage}</span>

								<span className="text-sm text-gray-400 mt-4">
									Already have an account?
									<Link href="/login" className="mt-5 text-neutral-content">
										{' '}
										Login
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
export default signUp
