
import $ from 'jquery'
import { Overlay, Tooltip } from "react-bootstrap";

export default function ImageInput({ setter }) {

    const uploaded = (e) => {
        $('#a').addClass("is-valid");
        setter(e.target.files[0]);
    }

    return (
        <div id="a" className={"mb-3 styledInput register-image pointer form-control"} >
            <span id='imageInput' className='pointer' >
                <input id="register-image" type="file" accept="image/*" onChange={uploaded} />
            </span>
            <label className="pointer" htmlFor="register-image"><i className="bi bi-cloud-arrow-up" /> Upload an image</label>
        </div>
    );
}