import { Link } from "react-router-dom";
import Auth from "./Auth";
import { useContext } from "react";

import { UserContext } from "../context/UserContext";

const Navbar = () => {
    const userContext = useContext(UserContext);

    const getAuth = () => {
        document.querySelector(".hide-auth").classList.remove("hide-auth");
        document.body.style.overflow = "hidden";
    };

    const removeAuth = () => {
        userContext.update({ authenticated: false });
    };

    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/blogs">All Blogs</Link>
            {userContext["userData"]["authenticated"] ? (
                <button onClick={removeAuth}>Log Out</button>
            ) : (
                <button onClick={getAuth}>Login/Signup</button>
            )}
            <Auth />
        </nav>
    );
};

export default Navbar;
