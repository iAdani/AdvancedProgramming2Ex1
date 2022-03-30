import InputForm from "../InputForm/InputForm";
import React from "react";
import {Link} from "react-router-dom";

function LoginForm() {
    return(
        <div className="w-15-pc">
            <div className="form-header mb-3" > Sign in </div>
            <InputForm id={ "login-username" } placeholder={ "Username" }> </InputForm>
            <InputForm id={ "login-pass" } type={ "password" } placeholder={ "Password" }> </InputForm>
            <button className="w-100 btn btn-primary">sign in</button>
            <div className="mb-3 white-text">Not registered? <Link to="/register">Register</Link>.</div>
        </div>
    )
}

export default LoginForm;