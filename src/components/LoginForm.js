import InputForm from "./InputForm";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './MainContainer.css';
import './forms.css';
import { LoginCheck } from "../DBAdapater"


export default function LoginForm({ setActiveUser }) {

    let navigate = useNavigate();
    const [invalidMessage, setInvalidMessage] = useState("");

    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const Login = function (element) {
        element.preventDefault();
        console.log(usernameValue);
        console.log(passwordValue);
        if (LoginCheck(usernameValue, passwordValue)) {
            setActiveUser(usernameValue);
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
                <InputForm id={"login-username"} placeholder={"Username"} type="text" setter={(e) => { setUsernameValue(e) }} />
                <InputForm id={"login-password"} placeholder={"Password"} type="password" setter={(e) => { setPasswordValue(e) }} />
                <div className="invalidMessage mb-1">{invalidMessage}</div>
                <button type="submit" className="mainButton w-75 btn">Sign in</button>
                <div className="mb-3 white-text">Not registered? <Link to="/register">Register</Link>.</div>
            </form>
        </div>
    )
}