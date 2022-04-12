import InputForm from "./InputForm";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import './MainContainer.css';
import './forms.css';
import { LoginCheck } from "../DBAdapater"


export default function LoginForm({setActiveUser}) {

    let navigate = useNavigate();
    const [invalidMessage, setInvalidMessage] = useState("");

    const Login = function (element) {
        var username = document.getElementById("login-username").value.toLowerCase();
        var password = document.getElementById("login-password").value;
        element.preventDefault();
        if (LoginCheck(username, password)) {
            setActiveUser(username);
            navigate('/chats');
        } else {
            setInvalidMessage("Invalid username or password.");
            setTimeout(() => { setInvalidMessage(""); }, 5000);
        }
    }

    return (
        <div className="mainContainer">
            <form className="w-45" onSubmit={Login}>
                <div className="welcomeText" > Sign in </div>
                <InputForm id={"login-username"} placeholder={"Username"} type="text" />
                <InputForm id={"login-password"} placeholder={"Password"} type="password" />
                <div className="invalidMessage mb-1">{invalidMessage}</div>
                <button type="submit" className="mainButton w-75 btn">Sign in</button>
                <div className="mb-3 white-text">Not registered? <Link to="/register">Register</Link>.</div>
            </form>
        </div>
    )
}