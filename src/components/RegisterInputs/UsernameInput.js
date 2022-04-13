import { useState, useRef } from "react";
import { Overlay, Tooltip } from "react-bootstrap";
import { UserExists } from "../../DBAdapater";


export default function ({ setter }) {
    const id = "register-username";
    const [show, setShow] = useState(false);

    const [li1, setli1] = useState("");
    const [li2, setli2] = useState("");
    const [li3, setli3] = useState("");

    const [validli1, setValidli1] = useState("");
    const [validli2, setValidli2] = useState("");
    const [validli3, setValidli3] = useState("");

    const target = useRef("");

    function poppy() {
        validate();
        setShow(!show);
        
    }

    function validate() {
        let val = target.current.value;

        if (UserExists(val)) {
            setli3(<span><i className="bi bi-x-lg"></i> Already in use</span>)
            setValidli3('badInput');
        } else {
            setli3(<span><i className="bi bi-check-lg"></i> Free to use</span>)
            setValidli3('goodInput');
        }

        if (val.match(/^[a-zA-Z0-9 ]*$/)) {
            setli2(<span><i className="bi bi-check-lg"></i> Not using symbols</span>)
            setValidli2('goodInput');
        } else {
            setli2(<span><i className="bi bi-x-lg"></i> Using symbols</span>)
            setValidli2('badInput');
            setli3('');
        }

        if (val.length > 12 || val.length < 3) {
            setli1(<span><i className="bi bi-x-lg"></i> Between 3 to 12 chars</span>)
            setValidli1('badInput');
            setli2('');
            setli3('');
        } else {
            setli1(<span><i className="bi bi-check-lg"></i> Between 3 to 12 chars</span>)
            setValidli1('goodInput');
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
                        </ul>
                    </Tooltip>
                )}
            </Overlay>
        </div>
    );
}