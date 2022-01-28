const Login = () => {
    const submitForm = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <form className="auth-form">
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
                <button onClick={submitForm}>Login</button>
            </form>
        </>
    );
};

export default Login;
