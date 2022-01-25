import { useState } from "react";

const Auth = () => {
    
    const [login, setLogin] = useState(true);

    const closeAuth = () => {
//        document.querySelector(".auth-quickview").remove();
    }

    const submitForm = () => {
        // submit form on the basis of wether it is signup or login
    }



    const changeForm = (e) => {
        e.preventDefault();
        let isLogin = !login;
        setLogin(isLogin);
    }

	return (
		<div className="auth-quickview" onClick={closeAuth}>
            <button onClick={changeForm}>{login ? "LOGIN" : "SIGNUP"}</button>
            <div className="both-forms">
                {login ? 
                    <form className="auth-form" method="POST" onSubmit={submitForm}>
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
                :
                    <form className="auth-form" method="POST" onSubmit={submitForm}>
                        <div className="auth-block">
                            <label htmlFor="username">Email: </label><br />
                            <input type="text" placeholder="email@email.com" name="Email" />
                        </div>
                        <div className="auth-block">
                            <label htmlFor="password">Password: </label><br />
                            <input type="password" placeholder="password" name="password" />
                        </div>
                        <div className="auth-block">
                            <label htmlFor="password">Password: </label><br />
                            <input type="password" placeholder="password" name="password" />
                        </div>
                        <button>Sign Up</button>
                    </form>
                }
            </div>
		</div>
	);
};

export default Auth;
