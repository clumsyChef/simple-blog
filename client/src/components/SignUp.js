import axios from "axios";
import { useState } from "react";

const Signup = () => {
	let [signedUp, setSignedUp] = useState(false);

	const submitForm = (e) => {
		const [email, username, password] = [
			document.querySelector("form#signup-form [name='email']").value,
			document.querySelector("form#signup-form [name='username']").value,
			document.querySelector("form#signup-form [name='password']").value,
		];

		axios
			.post("http://localhost:5000/users/signup", {
				email,
				username,
				password,
			})
			.then(function (response) {
				document.querySelector(".both-forms").classList.add("signed-success");
				let userSinged = true;
				setSignedUp(userSinged);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<>
			{signedUp ? (
				<div>
					<h2> You are registered Successfully.</h2>
					<h3>You can login as a user now.</h3>
				</div>
			) : (
				<form className="auth-form" id="signup-form">
					<div className="auth-block">
						<label htmlFor="username">Email: </label>
						<br />
						<input type="text" placeholder="email@email.com" name="email" />
					</div>
					<div className="auth-block">
						<label htmlFor="password">Username: </label>
						<br />
						<input type="text" placeholder="Username" name="username" />
					</div>
					<div className="auth-block">
						<label htmlFor="password">Password: </label>
						<br />
						<input type="password" placeholder="password" name="password" />
					</div>
					<p id="signup-message"></p>
					<button onClick={submitForm}>Sign Up</button>
				</form>
			)}
		</>
	);
};

export default Signup;
