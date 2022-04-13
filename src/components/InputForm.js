import { useState, useRef } from "react";
import { Overlay, Tooltip } from "react-bootstrap";
import $ from 'jquery';

export default function InputForm({ placeholder, type, id, setter }) {

    return (
        <div className="form-floating mb-3">
            <input className={"form-control styledInput"} id={id} type={type} placeholder=" " maxLength="12"/>
            <label className="input-label-margin" htmlFor={id}>{placeholder}</label>
        </div>
    )
}