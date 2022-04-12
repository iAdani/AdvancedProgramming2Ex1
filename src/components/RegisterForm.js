import InputForm from "./InputForm";
import React from "react";
import {Link} from "react-router-dom";
import VerficationBox from "./VerficationBox";
import { Popover, Button } from "bootstrap";
import { OverlayTrigger } from "react-bootstrap";

export default function RegisterForm() {
    const Register = function() {
        var username = document.getElementById("login-username").value;
        var password = document.getElementById("login-password").value;
    }

    return(
        <div className="mainContainer overflow-hidden">
            <form className="w-45">
                <div className="welcomeText">Register</div>
                <InputForm id={ "register-username" } placeholder={ "Username" }> </InputForm>
                <InputForm id={ "register-password" } type={ "password" } placeholder={ "Password" }> </InputForm>
                <InputForm id={ "register-pass-check" } type={ "password" } placeholder={ "Confirm Password" }> </InputForm>
                <InputForm id={ "register-display-name" } type={ "text" } placeholder={ "Display Name" }> </InputForm>
                <div className="mb-3 styledInput register-image pointer">
                    <span className="pointer"><input id="register-image" type="file"/></span>
                    <label className="pointer" htmlFor="register-image"><i className="bi bi-cloud-arrow-up"></i> Upload an image</label>
                </div>
                <button onSubmit={Register} className="mainButton w-75 btn" type="submit">Register</button>
                <div className="mb-3 white-text">Already registered? <Link to="/login">Sign in</Link>.</div>
            </form>
            <VerficationBox />
        </div>
    )
}