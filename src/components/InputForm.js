import { useState } from "react";


export default function InputForm({ placeholder, type, id }) {

    const [valid, setValid] = useState("");

    const validation = function() {
        setValid(checkValidation(id))
    }

    return(
        <div className="form-floating mb-3">
            <input onKeyUp={ validation } className={ "form-control styledInput " + valid } id={ id } type={ type } placeholder=" " maxLength="12"/>
            <label className="input-label-margin" htmlFor={ id }>{ placeholder }</label>
        </div>
    )
}

function checkValidation(id) {
    var input = document.getElementById(id).value;

    /* --- Sign in page --- */
    if(id === "login-username"){
        if (input !== "") {return "goodInput"};
        return "";
    }

    if(id === "login-password"){
        if (input !== "") {return "goodInput"};
        return "";
    }

    /* --- Register page --- */

    
}
