const Signup = () => {
	const submitForm = () => {
		//
	};
	return (
		<>
			<form className="auth-form" method="POST" onSubmit={submitForm}>
				<div className="auth-block">
					<label htmlFor="username">Email: </label>
					<br />
					<input type="text" placeholder="email@email.com" name="Email" />
				</div>
				<div className="auth-block">
					<label htmlFor="password">Password: </label>
					<br />
					<input type="password" placeholder="password" name="password" />
				</div>
				<div className="auth-block">
					<label htmlFor="password">Password: </label>
					<br />
					<input type="password" placeholder="password" name="password" />
				</div>
				<button>Sign Up</button>
			</form>
		</>
	);
};

export default Signup;
