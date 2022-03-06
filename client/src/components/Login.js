import axios from "axios";
// import { useCookies } from "react";
import { useCookies } from "react-cookie";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
	const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);
	const userContext = useContext(UserContext);
	console.log(userContext);
	const submitForm = (e) => {
		e.preventDefault();
		const [email, password] = [
			document.querySelector("form#login-form [name='email']").value,
			document.querySelector("form#login-form [name='password']").value,
		];

		if (email.length < 1 || password.length < 1) {
			alert("You must fill out form completely.");
			return false;
		}

		axios
			.post("http://localhost:5000/users/login", {
				email,
				password,
			})
			.then((response) => {
				if (response.status === 200) {
					if (response.data.status) {
						let loginToken = response.data.token;
						let expires = new Date();
						expires.setTime(expires.getTime() + 60 * 60 * 1000);
						setCookie("access_token", loginToken, { path: "/", expires });
						document.querySelector(".auth-quickview").classList.add("hide-auth");
						console.log("DATA -> ", response.data.user, response.data.token);
					} else {
						if (response.data.message === "error") {
							alert("Username Or Password is Wrong.");
						}
					}
				}
			});
	};
	return (
		<>
			<form className="auth-form" id="login-form">
				<div className="auth-block">
					<label htmlFor="username">Email: </label>
					<br />
					<input type="text" placeholder="email@example.com" name="email" />
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
