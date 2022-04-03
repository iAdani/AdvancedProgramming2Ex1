import InputForm from "../InputForm/InputForm";
import React from "react";
import {Link} from "react-router-dom";

function RegisterForm() {
    return(
        <div className="mainContainer">
            <div className="w-15-pc">
                <div className="form-header mb-3" >Register</div>
                <InputForm id={ "register-username" } placeholder={ "Username" }> </InputForm>
                <InputForm id={ "register-pass" } type={ "password" } placeholder={ "Password" }> </InputForm>
                <InputForm id={ "register-display-name" } type={ "text" } placeholder={ "Display Name" }> </InputForm>
                <button className="w-100 btn btn-primary">Register</button>
                <div className="mb-3 white-text">Already registered? <Link to="/login">Sign in</Link>.</div>
            </div>
        </div>
    )
}

export default RegisterForm;