import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar">
			<Link to="/">Home</Link>
			<Link to="/blogs">My Blogs</Link>
			<Link to="/auth">Login/Signup</Link>
		</nav>
	);
};

export default Navbar;
