import InputForm from "../InputForm/InputForm";
import React from "react";

function LoginForm() {
    return(
        <div className="loginForm">
            <div className="loginFormText mb-3" > Sign in </div>
            <InputForm id={ "login-email" } placeholder={ "Username" }></InputForm>
            <InputForm id={ "login-pass" } type={ "password" } placeholder={ "Password" }></InputForm>
            <button className="w-100 btn btn-primary">sign in</button>
            <div className="mb-3 white-text">Not registered? <a href="/">Register</a>.</div>
        </div>
    )
}

export default LoginForm;