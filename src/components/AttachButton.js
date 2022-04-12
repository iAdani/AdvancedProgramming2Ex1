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
            {/* //     <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    //         <i class="bi bi-paperclip"></i>
    //     </button> */}
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

            {/* <ul class="dropdown-menu">
            <li>
                <a class= "dropdown-item" href="#">
                <i class="bi bi-image"></i>
                </a>
            </li>

            <li>
                <a class= "dropdown-item" href="#">
                <i class="bi bi-camera-video"></i>
                </a>
            </li>

            <li>
                <a class= "dropdown-item" href="#">
                <i class="bi bi-mic"></i>
                </a>
            </li>

        </ul> */}
        </div>
    )
}

export default AttachButton