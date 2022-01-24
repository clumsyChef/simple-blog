import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Auth from "./Auth"; 

const Navbar = () => {
    const [auth, setAuth] = useState(false);
    
    const getAuth = () => {
        setAuth(true);
    } 
        
	return (
		<nav className="navbar">
			<Link to="/">Home</Link>
			<Link to="/blogs">My Blogs</Link>
            <button onClick={getAuth}>Login/Signup</button>
            {auth ? <Auth /> : null}
		</nav>
	);
};

export default Navbar;
