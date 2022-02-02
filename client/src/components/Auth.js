import { useState } from "react";
import Login from "./Login";
import Signup from "./SignUp";

const Auth = (props) => {
	const [login, setLogin] = useState(true);

	const closeAuth = (e) => {
		e.target.classList.add("hide-auth");
		document.body.style.overflow = "none";
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
			<div className="both-forms" onClick={preventForms}>
				<button onClick={changeForm} className="switch-forms">
					{login ? "SIGNUP" : "LOGIN"}
				</button>
				{login ? <Login /> : <Signup />}
			</div>
		</div>
	);
};

export default Auth;
