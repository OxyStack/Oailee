import { Footer as FooterUI } from 'react-daisyui'
import logo from '../../assets/Oailee_logo.svg'

function Footer() {
	return (
		<FooterUI className=" p-10 text-neutral-content">
			<div>
				<div className="">
					<img src={logo} className="max-w-sm w-28" alt="" />
				</div>
				<p>
					Oailee.
					<br />
					Lorem ipsum dolor sit amet.
				</p>
			</div>

			<div>
				<FooterUI.Title>Services</FooterUI.Title>
				<a className="link link-hover">Branding</a>
				<a className="link link-hover">Design</a>
				<a className="link link-hover">Marketing</a>
				<a className="link link-hover">Advertisement</a>
			</div>
			<div>
				<FooterUI.Title>Company</FooterUI.Title>
				<a className="link link-hover">About us</a>
				<a className="link link-hover">Contact</a>
				<a className="link link-hover">Jobs</a>
				<a className="link link-hover">Press kit</a>
			</div>
			<div>
				<FooterUI.Title>Legal</FooterUI.Title>
				<a className="link link-hover">Terms of use</a>
				<a className="link link-hover">Privacy policy</a>
				<a className="link link-hover">Cookie policy</a>
			</div>
		</FooterUI>
	)
}

export default Footer
