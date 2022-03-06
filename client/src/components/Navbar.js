import { Link } from "react-router-dom";
import Auth from "./Auth";
import { useContext, useState } from "react";

import { UserContext } from "../context/UserContext";

const Navbar = () => {
	const userContext = useContext(UserContext);
	console.log(userContext);

	const [logged, setLogged] = useState(userContext["userData"]["authenticated"]);

	const getAuth = () => {
		document.querySelector(".hide-auth").classList.remove("hide-auth");
		document.body.style.overflow = "hidden";
	};

	return (
		<nav className="navbar">
			<Link to="/">Home</Link>
			<Link to="/blogs">All Blogs</Link>
			{logged ? <button>Log Out</button> : <button onClick={getAuth}>Login/Signup</button>}
			<Auth />
		</nav>
	);
};

export default Navbar;
