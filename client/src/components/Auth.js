const Auth = () => {
    const closeAuth = () => {
        document.querySelector(".auth-quickview").remove();
    }

	return (
		<div className="auth-quickview" onClick={closeAuth}>
            <form className="auth-form">
                <div className="auth-block">
                    <label htmlFor="username">Username: </label><br />
                    <input type="text" placeholder="Username" name="username" />
                </div>
                <div className="auth-block">
                    <label htmlFor="password">Password: </label><br />
                    <input type="password" placeholder="password" name="password" />
                </div>
                <button>Login</button>
            </form>
		</div>
	);
};

export default Auth;
