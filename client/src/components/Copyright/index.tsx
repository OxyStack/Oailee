import { Footer } from 'react-daisyui'

const Copyright = () => {
	return (
		<Footer className="footer footer-center grid grid-cols-2 p-3 text-base-content bg-base-500 self-end z-10">
			<div>
				<p>
					Copyright © 2022 - All right reserved by
					<a
						className="link link-hover link-primary text-primary"
						href="https://github.com/OxyStack/Oailee"
						target="_blank"
						rel="noreferrer"
					>
						{' '}
						OxyStack
					</a>
				</p>
			</div>
			<div className="flex gap-10">
				<a className="link link-hover" href="/license">
					{' '}
					License{' '}
				</a>
				<a className="link link-hover" href="/privacy-policy">
					{' '}
					Privacy Policy{' '}
				</a>
				<a className="link link-hover" href="/terms-of-service">
					{' '}
					Terms of Service{' '}
				</a>
			</div>
		</Footer>
	)
}
export default Copyright
