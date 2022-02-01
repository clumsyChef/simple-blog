import { Link } from "react-router-dom";
import Auth from "./Auth";

const Navbar = () => {
	const getAuth = () => {
		document.querySelector(".hide-auth").classList.remove("hide-auth");
		document.body.style.overflow = "hidden";
	};

	return (
		<nav className="navbar">
			<Link to="/">Home</Link>
			<Link to="/blogs">All Blogs</Link>
			<button onClick={getAuth}>Login/Signup</button>
			<Auth />
		</nav>
	);
};

export default Navbar;
