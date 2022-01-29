import axios from "axios";

const Signup = () => {
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
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<>
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
		</>
	);
};

export default Signup;
