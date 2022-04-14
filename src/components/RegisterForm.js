import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import UsernameInput from "./RegisterInputs/UsernameInput";
import PasswordInput from "./RegisterInputs/PasswordInput";
import PassValidInput from "./RegisterInputs/PassValidInput";
import DisplayInput from "./RegisterInputs/DisplayInput";

export default function RegisterForm({ setActiveUser }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passValid, setPassValid] = useState('');
    const [nickname, setNickname] = useState('');

    let navigate = useNavigate();

    const Register = function(element) {
        element.preventDefault();
        console.log(nickname);
        if (username !== '' && password !== '' && passValid !== '' && nickname !== '') {
            setActiveUser(username);
            navigate('/chats');
        }

    }

    return(
        <div className="mainContainer overflow-hidden">
            <form className="w-45" onSubmit={Register}>
                <div className="welcomeText">Register</div>
                <UsernameInput setter={ setUsername } />
                <PasswordInput setter={ setPassword } />
                <PassValidInput setter={ setPassValid } password={password} />
                <DisplayInput setter={ setNickname } />
                <div className="mb-3 styledInput register-image pointer">
                    <span className="pointer"><input id="register-image" type="file"/></span>
                    <label className="pointer" htmlFor="register-image"><i className="bi bi-cloud-arrow-up"></i> Upload an image</label>
                </div>
                <button className="mainButton w-75 btn" type="submit">Register</button>
                <div className="mb-3 white-text">Already registered? <Link to="/login">Sign in</Link>.</div>
            </form>
        </div>
    )
}