import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import SendButton from "./SendButton";
import './AttachButton.css';
import { AddMessage } from "../../DBAdapater";
import { getTime } from "./Chat";
import $ from 'jquery'

export default function SendVideoButton(props) {
    const [show, setShow] = useState(false);
    const [video, setVideo] = useState('')

    // Sends the video in chat
    const sendVideo = (e) => {
        e.preventDefault();
        console.log(props.curChat)
        if (video !== '') {
            AddMessage(
                props.curChat,
                props.activeUser,
                getTime(),
                "video",
                video
            );
            props.cleanUp();
            close();
        }
    }

    // Shows the video preview
    const previewVideo = (e) => {
        $('#videoPreview').show(200);
        setVideo(URL.createObjectURL(e.target.files[0]));
    }

    // Closes the Modal
    const close = () => {
        setShow(false);
        $('#videoPreview').hide(300);
    }

    return (
        <>
            <li onClick={() => { setShow(true) }}>
                <span className="dropdown-item" >
                    <i className="bi bi-camera-video attachment-icon" />
                </span>
            </li>
            <Modal show={show} centered>
                <Modal.Header>
                    <Modal.Title>Send a video</Modal.Title>
                </Modal.Header>
                <Modal.Body className='attachModalBody' >
                        <input id="attachVideo" type="file" accept="video/*" onChange={previewVideo} />
                        <label className='attachIcon' htmlFor='attachVideo'><i className="bi bi-cloud-arrow-up"/></label>
                        <br/>
                        <label className='attachLabel' htmlFor="attachVideo">Click to upload your video</label>
                        <div id='videoPreview'>
                            <video src={video} controls='controls' />
                        </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="closeModalButton" onClick={close}>Cancel</Button>
                    <form onSubmit={sendVideo}>
                        <SendButton />
                    </form>
                </Modal.Footer>
            </Modal>
        </>
    );
}