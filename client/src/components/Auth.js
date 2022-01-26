import { useState } from "react";
import Login from "./Login";
import Signup from "./SignUp";

const Auth = (props) => {
	const [login, setLogin] = useState(true);

	const closeAuth = (e) => {
		e.target.classList.add("hide-auth");
	};

	const preventForms = (e) => {
		e.preventDefault();
		e.stopPropagation();
	};

	const changeForm = (e) => {
		e.preventDefault();
		e.stopPropagation();
		let isLogin = !login;
		setLogin(isLogin);
	};

	return (
		<div className="auth-quickview hide-auth" onClick={closeAuth}>
			<button onClick={changeForm}>{login ? "SIGNUP" : "LOGIN"}</button>
			<div className="both-forms" onClick={preventForms}>
				{login ? <Login /> : <Signup />}
			</div>
		</div>
	);
};

export default Auth;
