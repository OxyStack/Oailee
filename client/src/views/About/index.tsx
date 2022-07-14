import { Hero, Breadcrumbs } from 'react-daisyui'
import Copyright from '../../components/Copyright'
import Footer from '../../components/Footer'

function About() {
	return (
		<div
			className="px-12"
			style={{
				background:
					'linear-gradient(61deg, rgba(14, 22, 41, 1) 0%, rgba(14, 22, 41, 1) 48%, rgba(14, 22, 41, 1) 63%, rgba(24, 25, 74, 1) 75%, rgba(22, 23, 68, 1) 88%, rgba(14, 22, 41, 1) 100%)',
			}}
		>
			<Breadcrumbs className="self-start mb-5 mt-5">
				<Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
				<Breadcrumbs.Item href="/">About</Breadcrumbs.Item>
			</Breadcrumbs>
			<Hero className="">
				<Hero.Content className="">
					<div className="max-w-lg">
						<h1 className="text-5xl font-bold text-center"> About Oailee</h1>
						<p className="py-10">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
							deleniti eaque aut repudiandae et a id nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Eius inventore, et, at nobis dolorem laborum fugit voluptas enim consequatur dicta voluptatum aut? Sequi
							nihil pariatur dolore voluptatum exercitationem facere reprehenderit.
						</p>
					</div>
				</Hero.Content>
			</Hero>
			<Footer />
			<Copyright />
		</div>
	)
}
export default About
