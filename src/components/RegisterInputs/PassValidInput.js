import { useState, useRef } from "react"


export default function PassValidInput({ setter, password }) {

    const [inputValid, setInputValid] = useState("")

    const target = useRef("");

    const validate = () => {
        let val = target.current.value;
        if (val === password && val.length > 0) {
            setter(val);
            setInputValid('is-valid');
        } else {
            setter('');
            setInputValid('is-invalid');
        }
        if (val.length === 0) setInputValid('');
    }
    
    return (
        <div className="form-floating mb-3">
            <input onKeyUp={validate} ref={target} className={inputValid + " form-control styledInput"} 
                id={'register-pass-check'} type='password' placeholder=" " maxLength="12"/>
            <label className="input-label-margin" htmlFor={'register-pass-check'}>Confirm Password</label>
        </div>
    )
}