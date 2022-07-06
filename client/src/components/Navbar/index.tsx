import { Button, Dropdown, Navbar, Indicator, Badge, Card } from 'react-daisyui'

function Navigationbar() {
	return (
		<div className="pb-40 flex w-full component-preview p-4 items-center justify-center gap-2 font-poppiens">
			<Navbar>
				<div className="flex-1">
					<Button className="text-xl normal-case" color="ghost">
						daisyUI
					</Button>
				</div>
				<div className="flex-none">
					<Dropdown vertical="end">
						<Button tabIndex={0} color="ghost" shape="circle">
							<Indicator item={<Badge size="sm">8</Badge>}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
							</Indicator>
						</Button>
						<Dropdown.Menu tabIndex={0} className="mt-3 card card-compact  w-52 bg-base-100 !p-0">
							<Card.Body className="card-body">
								<span className="font-bold text-lg">8 Items</span>
								<span className="text-info">Subtotal: $999</span>
								<Card.Actions>
									<Button color="primary" fullWidth>
										View cart
									</Button>
								</Card.Actions>
							</Card.Body>
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown vertical="end">
						<Button color="ghost" className="avatar" shape="circle">
							<div className="w-10 rounded-full">
								<img src="https://api.lorem.space/image/face?hash=33791" alt="lorem" />
							</div>
						</Button>
						<Dropdown.Menu className="w-52 menu-compact">
							<li>
								<a className="justify-between" href="/">
									Profile
									<span className="badge">New</span>
								</a>
							</li>
							<Dropdown.Item>Settings</Dropdown.Item>
							<Dropdown.Item>Logout</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</Navbar>
		</div>
	)
}

export default Navigationbar
