import { Link } from "react-router-dom";
import React from "react";

export default function MainScreen() {
    return(
        <div className="w-15-pc mb-3">
            <div className="form-header mb-3" >Welcome</div>
            <Link className="w-100 mb-3 btn btn-primary" to="/login">Sign in</Link>
            <Link className="w-100 mb-3 btn btn-primary" to="/register">Register</Link>
        </div>
    )
}