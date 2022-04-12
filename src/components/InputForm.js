import { useState, useRef } from "react";
import { Overlay, Tooltip } from "react-bootstrap";

export default function InputForm({ placeholder, type, id }) {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const [valid, setValid] = useState("is-valid");
    const [validText, setValidText] = useState("hi");

    const validation = function () {
        setValid(checkValidation(id))
    }


    return (
        <div className="form-floating mb-3">
            <input onKeyUp={validation} className={valid + " form-control styledInput"} id={id} type={type} placeholder=" " maxLength="12"
             ref={target} onBlur={() => setShow(!show)} onFocus={() => setShow(!show)} />
            <label className="input-label-margin" htmlFor={id}>{placeholder}</label>
            <Overlay target={target.current} show={show} placement="right">
                {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                        { validText }
                    </Tooltip>
                )}
            </Overlay>
        </div>
    )
}

function checkValidation(id) {
    var input = document.getElementById(id).value;

    /* --- Sign in page --- */
    // if(id === "login-username"){
    //     if (input !== "") {return "goodInput"};
    //     return "";
    // }

    // if(id === "login-password"){
    //     if (input !== "") {return "goodInput"};
    //     return "";
    // }

    /* --- Register page --- */



}
