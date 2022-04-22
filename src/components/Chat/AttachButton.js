import React from "react";
import { NavDropdown } from "react-bootstrap";
import { useState } from "react";
import "./AttachButton.css";
import SendImageButton from "./SendImageButton";

function AttachButton(props) {
    const [show, setShow] = useState(false);

    const sendImage = (e) => {

    }
    return (
        <div className="dropup">
            <NavDropdown title={<i className="bi bi-paperclip attachment-icon" />} id="chat-attachment"
                show={show} onMouseEnter={() => { setShow(true); }} onMouseLeave={() => { setShow(false); }}>
                <li>
                    <span className="dropdown-item" >
                        <label htmlFor="attachVideo"><i className="bi bi-camera-video attachment-icon" /></label>
                        <input id="attachVideo" type="file" accept="video/mp4,video/x-m4v,video/*" onChange={sendImage} />
                    </span>
                </li>

                <SendImageButton {...props} />
            </NavDropdown> 
        </div>
    )
}

export default AttachButton;
