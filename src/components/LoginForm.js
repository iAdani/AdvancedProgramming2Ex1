import InputForm from "./InputForm";
import React from "react";
import {Link} from "react-router-dom";
import './MainContainer.css'

function LoginForm() {
    return(
        <div className="mainContainer">
            <div className="w-45">
                <div className="signInText" > Sign In </div>
                <InputForm id={ "login-username" } placeholder={ "Username" } type="text"> </InputForm>
                <InputForm id={ "login-pass" } placeholder={ "Password" } type="password"> </InputForm>
                <button className="w-100 btn mainButton">Sign In</button>
                <div className="mb-3 white-text">Not registered? <Link to="/register">Register</Link>.</div>
            </div>
        </div>
    )
}

export default LoginForm;