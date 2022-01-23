const Auth = () => {
	return (
		<div className="quickview">
			<div className="auth-block">
				<label htmlFor="username">Username</label>
				<input type="text" placeholder="username" />
			</div>
			<div className="auth-block">
				<label htmlFor="username">Password</label>
				<input type="password" placeholder="password" />
			</div>
		</div>
	);
};

export default Auth;
