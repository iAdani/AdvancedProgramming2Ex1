import { Link } from "react-router-dom";
import React from "react";

export default function MainScreen() {
    return(
        <div className="mainContainer">
            <div className="welcomeText" >
                <h2>Welcome</h2></div>
            <Link className="button mb-3" to="/login">Sign in</Link>
            <Link className="button" to="/register">Register</Link>
        </div>
    )
}