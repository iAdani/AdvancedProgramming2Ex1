import InputForm from "./InputForm";
import React, { useState } from "react";
import {Link} from "react-router-dom";
import VerficationBox from "./VerficationBox";
import { Popover, Button } from "bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import UsernameInput from "./RegisterInputs/UsernameInput";

export default function RegisterForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passValid, setPassValid] = useState(false);
    const [nickname, setNickname] = useState("");




    const Register = function() {
        var username = document.getElementById("login-username").value;
        var password = document.getElementById("login-password").value;
    }

    return(
        <div className="mainContainer overflow-hidden">
            <form className="w-45">
                <div className="welcomeText">Register</div>
                {/* <InputForm id={ "register-username" } placeholder={ "Username" } setter={ setUsername }/> */}
                <UsernameInput setter= { setUsername } />
                <InputForm id={ "register-password" } type={ "password" } placeholder={ "Password" } setter={setPassword}/>
                <InputForm id={ "register-pass-check" } type={ "password" } placeholder={ "Confirm Password" } setter={ passValid }/> 
                <InputForm id={ "register-display-name" } type={ "text" } placeholder={ "Display Name" } setter={ passValid }/>
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