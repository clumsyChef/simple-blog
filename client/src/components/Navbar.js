import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Auth from "./Auth";

const Navbar = () => {
	const getAuth = () => {
		document.querySelector(".hide-auth").classList.remove("hide-auth");
	};

	return (
		<nav className="navbar">
			<Link to="/">Home</Link>
			<Link to="/blogs">My Blogs</Link>
			<button onClick={getAuth}>Login/Signup</button>
			<Auth />
		</nav>
	);
};

export default Navbar;
