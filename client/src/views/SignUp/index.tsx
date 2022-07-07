function SignUp() {
	return (
		<div>
			<div className="grid grid-cols-2 gap-4">
				<div className="flex flex-col">
					<div className="p-10 card bg-base-200">
						<form className="form-control">
							<label className="label" htmlFor="username">
								<span className="label-text text text-accent">Username</span>
								<input type="text" placeholder="username" className="input input-bordered" />
							</label>
							<label className="label" htmlFor="email">
								<span className="label-text text text-accent">Email</span>
								<input type="text" placeholder="mail@example.com" className="input input-bordered" />
							</label>
							<label className="label" htmlFor="password">
								<span className="label-text text text-primary">Password</span>
								<input type="password" placeholder="min. 8 characters" className="input input-bordered" />
							</label>
						</form>
					</div>

					<div className="flex flex-col" />
				</div>
			</div>
		</div>
	)
}

export default SignUp
