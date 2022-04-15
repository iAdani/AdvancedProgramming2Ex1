import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import UsernameInput from "./RegisterInputs/UsernameInput";
import PasswordInput from "./RegisterInputs/PasswordInput";
import PassValidInput from "./RegisterInputs/PassValidInput";
import DisplayInput from "./RegisterInputs/DisplayInput";
import { AddUser } from "../DBAdapater";
import $ from 'jquery';
import { Overlay, Tooltip } from "react-bootstrap";

export default function RegisterForm({ setActiveUser }) {
  
    //used for registration
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passValid, setPassValid] = useState('');
    const [nickname, setNickname] = useState('');
    let navigate = useNavigate();

    // Used for submit button overlay
    const [show, setShow] = useState(false);
    const [submitOverlayText, setSubmitOverlayText] = useState('');
    let buttonRef = useRef('');

    // Used for submit button disabling feature
    useEffect(() => {
        if (username === '' || password === '' || passValid === '' || nickname === '') {
            $('#registerSubmit').prop('disabled', true);
        } else {
            $('#registerSubmit').prop('disabled', false);
        }
    });

    // Registering after submition
    const Register = function (element) {
        element.preventDefault();
        if (username !== '' && password !== '' && passValid !== '' && nickname !== '') {
            AddUser(username, nickname, password);
            setActiveUser(username);
            navigate('/chats');
        } else {
            $('#registerContainer').addClass('red-border');
            setTimeout(() => { $('#registerContainer').removeClass('red-border'); }, 4500);
        }

  const Register = function (element) {
    element.preventDefault();
    console.log(nickname);
    if (
      username !== "" &&
      password !== "" &&
      passValid !== "" &&
      nickname !== ""
    ) {
      setActiveUser(username);
      navigate("/chats");
    }
  };

    // Used for submit button overlay
    const poppy = () => {
        if ($('#registerSubmit').is(':disabled')) {
            setSubmitOverlayText(<span className="badInput"><i className="bi bi-x-lg"></i> All fields must be valid!</span>);
        } else {
            setSubmitOverlayText(<span className="goodInput"><i className="bi bi-check-lg"></i> Good to go!</span>);
        }
        setShow(!show);
    }

    return (
        <div id='registerContainer' className="mainContainer overflow-hidden">
            <form className="w-45" onSubmit={Register}>
                <div className="welcomeText">Register</div>
                <UsernameInput setter={setUsername} />
                <PasswordInput setter={setPassword} />
                <PassValidInput setter={setPassValid} password={password} />
                <DisplayInput setter={setNickname} />
                <div className="mb-3 styledInput register-image pointer">
                    <span className="pointer"><input id="register-image" type="file" /></span>
                    <label className="pointer" htmlFor="register-image"><i className="bi bi-cloud-arrow-up"></i> Upload an image</label>
                </div>
                <span id='submitSpan' ref={buttonRef} onMouseEnter={poppy} onMouseLeave={poppy} >
                    <button id='registerSubmit' className="mainButton w-75 btn" type="submit">Register</button>
                </span>
                <Overlay target={buttonRef} show={show} placement="right">
                {(props) => (
                    <Tooltip {...props}><span>{submitOverlayText}</span></Tooltip>
                )}
            </Overlay>
                <div className="mb-3 white-text">Already registered? <Link to="/login">Sign in</Link>.</div>
            </form>
        </div>
      </form>
    </div>
  );
}
