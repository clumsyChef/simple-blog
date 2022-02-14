import axios from "axios";
// import { useState } from "react";

const Login = () => {
    const submitForm = (e) => {
        e.preventDefault();
        const [email, password] = [
            document.querySelector("form#login-form [name='email']").value,
            document.querySelector("form#login-form [name='password']").value,
        ];

        axios
            .post("http://localhost:5000/users/login", {
                email,
                password,
            })
            .then((response) => {
                console.log(response);
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
