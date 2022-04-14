import InputForm from "./InputForm";
import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import VerficationBox from "./VerficationBox";
import UsernameInput from "./RegisterInputs/UsernameInput";
import PasswordInput from "./RegisterInputs/PasswordInput";

export default function RegisterForm({ setActiveUser }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passValid, setPassValid] = useState('');
    const [nickname, setNickname] = useState('');

    let navigate = useNavigate();

    const Register = function(element) {
        element.preventDefault();
        console.log(passValid);
        if (username != '' && password != '' && passValid != '' && nickname != '') {
            setActiveUser(username);
            navigate('/chats');
        }

    }

    return(
        <div className="mainContainer overflow-hidden">
            <form className="w-45" onSubmit={Register}>
                <div className="welcomeText">Register</div>
                <UsernameInput setter={ (e) => {setUsername(e) }} />
                <PasswordInput setter={ setPassword } />
                <InputForm id={ "register-pass-check" } type={ "password" } placeholder={ "Confirm Password" } setter={(e) => { setPassValid(e) }}/> 
                <InputForm id={ "register-display-name" } type={ "text" } placeholder={ "Display Name" } setter={ (e) => { setNickname(e) }}/>
                <div className="mb-3 styledInput register-image pointer">
                    <span className="pointer"><input id="register-image" type="file"/></span>
                    <label className="pointer" htmlFor="register-image"><i className="bi bi-cloud-arrow-up"></i> Upload an image</label>
                </div>
                <button className="mainButton w-75 btn" type="submit">Register</button>
                <div className="mb-3 white-text">Already registered? <Link to="/login">Sign in</Link>.</div>
            </form>
            <VerficationBox />
        </div>
    )
}