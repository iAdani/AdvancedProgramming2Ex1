import { useState, useRef } from "react";
import { Overlay, Tooltip } from "react-bootstrap";
import { UserExists } from "../../DBAdapater";


export default function ({ setter }) {
    const id = "register-password";
    const [show, setShow] = useState(false);

    const [li1, setli1] = useState("");
    const [li2, setli2] = useState("");
    const [li3, setli3] = useState("");
    const [li4, setli4] = useState("");
    const [li5, setli5] = useState("");
    const [validli1, setValidli1] = useState("");
    const [validli2, setValidli2] = useState("");
    const [validli3, setValidli3] = useState("");
    const [validli4, setValidli4] = useState("");
    const [validli5, setValidli5] = useState("");


    const target = useRef("");

    function poppy() {
        validate();
        setShow(!show);
        
    }

    function validate() {
        let val = target.current.value;
        if (val.match(/^[a-zA-Z0-9 ]*$/)) {
            setli2(<span><i className="bi bi-check-lg"></i> Not using symbols</span>)
            setValidli2('goodInput');
        } else {
            setli2(<span><i className="bi bi-x-lg"></i> Using symbols</span>)
            setValidli2('badInput');
            setli3('');
        }

        if (val.match(/^[a-zA-Z0-9 ]*$/)) {
            setli2(<span><i className="bi bi-check-lg"></i> Not using symbols</span>)
            setValidli2('goodInput');
        } else {
            setli2(<span><i className="bi bi-x-lg"></i> Using symbols</span>)
            setValidli2('badInput');
            setli3('');
        }

    }


    return (
        <div className="form-floating mb-3">
            <input className={"form-control styledInput"} id={id} placeholder=" " maxLength="12"
                ref={target} onKeyUp={validate} onFocus={poppy} onBlur={() => {setShow(!show);}}/>
            <label className="input-label-margin" htmlFor={id}>Username</label>
            <Overlay target={target.current} show={show} placement="right">
                {(props) => (
                    <Tooltip id="overlay" {...props}>
                        <ul>
                            <li id="usernameli1" className={validli1}>{li1}</li>
                            <li id="usernameli2" className={validli2}>{li2}</li>
                            <li id="usernameli3" className={validli3}>{li3}</li>
                            <li id="usernameli4" className={validli4}>{li4}</li>
                            <li id="usernameli5" className={validli5}>{li5}</li>
                        </ul>
                    </Tooltip>
                )}
            </Overlay>
        </div>
    );
}