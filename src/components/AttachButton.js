import React from 'react'
import { NavDropdown } from 'react-bootstrap';
import { useState } from 'react';
import "./AttachButton.css";

function AttachButton() {
    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    return (
        <div className="dropup">
            <NavDropdown title={<i className="bi bi-paperclip attachment-icon"></i>} id="chat-attachment" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                <li>
                    <a class="dropdown-item" href="#">
                        <i className="bi bi-image attachment-icon"></i>
                    </a>
                </li>

                <li>
                    <a class="dropdown-item" href="#">
                        <i className="bi bi-camera-video attachment-icon"></i>
                    </a>
                </li>

                <li>
                    <a class="dropdown-item" href="#">
                        <i className="bi bi-mic attachment-icon"></i>
                    </a>
                </li>
            </NavDropdown>
        </div>
    )
}

export default AttachButton