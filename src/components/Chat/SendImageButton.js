import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import SendButton from "./SendButton";
import './AttachButton.css';
import { AddMessage } from "../../DBAdapater";
import { getTime } from "./Chat";
import $ from 'jquery'


export default function SendImageButton(props) {
    const [show, setShow] = useState(false);
    const [image, setImage] = useState('')

    // Sends the image in chat
    const sendImage = (e) => {
        e.preventDefault();
        console.log(props.curChat)
        if (image !== '') {
            AddMessage(
                props.curChat,
                props.activeUser,
                getTime(),
                "image",
                image
            );
            props.cleanUp();
            close();
        }
    }

    // Shows the image preview
    const previewImage= (e) => {
        $('#imagePreview').show(200);
        setImage(URL.createObjectURL(e.target.files[0]));
    }

    // Closes the modal
    const close = () => {
        setShow(false);
        $('#imagePreview').hide(300);
    }

    return (
        <>
            <li onClick={() => { setShow(true) }}>
                <span className="dropdown-item" >
                    <i className="bi bi-image attachment-icon" />
                </span>
            </li>
            <Modal show={show} centered>
                <Modal.Header>
                    <Modal.Title>Send an image</Modal.Title>
                </Modal.Header>
                <Modal.Body className='attachModalBody' >
                        <input id="attachImage" type="file" accept="image/*" onChange={previewImage} />
                        <label className='attachIcon' htmlFor='attachImage'><i className="bi bi-cloud-arrow-up"/></label>
                        <br/>
                        <label className='attachLabel' htmlFor="attachImage">Click to upload your image</label>
                        <div id='imagePreview'>
                            <img src={image} />
                        </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="closeModalButton" onClick={close}>Cancel</Button>
                    <form onSubmit={sendImage}>
                        <SendButton />
                    </form>
                </Modal.Footer>
            </Modal>
        </>
    );
}