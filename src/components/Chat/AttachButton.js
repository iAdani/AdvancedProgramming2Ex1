import React from "react";
import { NavDropdown } from "react-bootstrap";
import { useState } from "react";
import "./AttachButton.css";

function AttachButton() {
    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

    const sendImage = (e) => {
        
    }
    return (
        <div className="dropup">
            <NavDropdown title={<i className="bi bi-paperclip attachment-icon" />} id="chat-attachment"
                show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                <li>
                    <span className="dropdown-item" >
                        <label htmlFor="attachVideo"><i className="bi bi-camera-video attachment-icon" /></label>
                        <input id="attachVideo" type="file" accept="video/mp4,video/x-m4v,video/*" onChange={sendImage} />
                    </span>
                </li>

                <li>
                    <span className="dropdown-item" >
                        <label htmlFor="attachImage"><i className="bi bi-image attachment-icon" /></label>
                        <input id="attachImage" type="file" accept="image/*" />
                    </span>
                </li>

                <li>
                    <span className="dropdown-item" >
                        <i className="bi bi-mic attachment-icon" />
                    </span>
                </li>
            </NavDropdown>
        </div>
    )
}

export default AttachButton;
