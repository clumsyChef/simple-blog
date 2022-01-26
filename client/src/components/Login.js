const Login = () => {
	const submitForm = () => {
		//
	};
	return (
		<>
			<button>Go To Sign Up</button>
			<form className="auth-form" method="POST" onSubmit={submitForm}>
				<div className="auth-block">
					<label htmlFor="username">Username: </label>
					<br />
					<input type="text" placeholder="Username" name="username" />
				</div>
				<div className="auth-block">
					<label htmlFor="password">Password: </label>
					<br />
					<input type="password" placeholder="password" name="password" />
				</div>
				<button>Login</button>
			</form>
		</>
	);
};

export default Login;
