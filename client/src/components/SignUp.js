import axios from "axios";
import { useState } from "react";

const Signup = () => {
    let [signedUp, setSignedUp] = useState(false);
    let [signedMessage, setSignedMessage] = useState("You are registered Successfully.");

    const submitForm = (e) => {
        const [email, username, password] = [
            document.querySelector("form#signup-form [name='email']").value,
            document.querySelector("form#signup-form [name='username']").value,
            document.querySelector("form#signup-form [name='password']").value,
        ];

        if (email.length < 1 || username.length < 1 || password.length < 1) {
            alert("You must fill out form completely.");
            return false;
        }

        axios
            .post("http://localhost:5000/users/signup", {
                email,
                username,
                password,
            })
            .then((response) => {
                if (response.status === 200) {
                    if (response.data.status) {
                        document.querySelector(".both-forms").classList.add("signed-success");
                        let userSinged = true;
                        setSignedUp(userSinged);
                    } else {
                        document.querySelector(".both-forms").classList.add("signed-failure");
                        if (response.data.message === "user_exists") {
                            alert(`Email Already exists!`);
                        } else if (response.data.message === "invalid_credentials") {
                            alert(`Invalid Credentials.`);
                        } else if (response.data.message === "incomplete") {
                            alert(`Form Incomplete!`);
                        }
                    }
                } else {
                    alert("Something Went Wrong. Try Again Later.");
                }
                return false;
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <>
            {signedUp ? (
                <div>
                    <h2>{signedMessage}</h2>
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
