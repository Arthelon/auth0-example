import React from "react";
import { useAuth0 } from "../auth0-spa";
import { Link } from "react-router-dom";

const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div>
            {isAuthenticated && (
                <button onClick={() => logout()}>Log out</button>
            )}
            {!isAuthenticated && (
                <button onClick={() => loginWithRedirect({})}>Log In</button>
            )}
            {isAuthenticated && (
                <span>
                    <Link to="/">Home</Link>&nbsp;
                    <Link to="/profile">Profile</Link>
                </span>
            )}
        </div>
    );
};

export default NavBar;
