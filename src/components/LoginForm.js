import InputForm from "./InputForm";
import React, { useRef } from "react";
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";

import './MainContainer.css';
import './forms.css';
import {LoginCheck} from "../DBAdapater"


export default function LoginForm() {

    let navigate = useNavigate(); 

    const [invalidMessage, setInvalidMessage] = useState("");

    const Login = function(element) {
        var username = document.getElementById("login-username").value.toLowerCase();
        var password = document.getElementById("login-password").value;
        element.preventDefault();
        if(LoginCheck(username, password) < 0) {
            setInvalidMessage("Invalid username or password.");
            setTimeout(() => {setInvalidMessage("");}, 4500);
        } else {
            navigate('/chats');
        }
    }

    return(
        <div className="mainContainer">
            <form className="w-45" onSubmit={Login}>
                <div className="welcomeText" > Sign in </div>
                <InputForm id={ "login-username" } placeholder={ "Username" } type="text"> </InputForm>
                <InputForm id={ "login-password" } placeholder={ "Password" } type="password"> </InputForm>
                <div className="invalidMessage mb-1">{invalidMessage}</div>
                <button type="submit" className="mainButton w-100 btn">Sign in</button>
                <div className="mb-3 white-text">Not registered? <Link to="/register">Register</Link>.</div>
            </form>
        </div>
    )
}