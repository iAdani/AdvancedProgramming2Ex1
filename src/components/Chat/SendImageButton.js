import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import SendButton from "./SendButton";
import './AttachButton.css';
import $ from 'jquery';
import { AddMessage } from "../../DBAdapater";
import { getTime } from "./Chat";


export default function SendImageButton(props) {
    const [show, setShow] = useState(false);
    const [image, setImage] = useState('')

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
            setShow(false);
            props.cleanUp();
            setTimeout(() => {setImage('')}, 300);
        }
    }

    const previewImage= (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    }

    const close = () => {
        setShow(false);
        setTimeout(() => {setImage('');}, 300);
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