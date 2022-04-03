function InputForm({ placeholder, type, id }) {
    return(
        <div className="form-floating mb-3">
            <input className="form-control styledInput" id={ id } type={ type } placeholder=" " />
            <label className="hatula" htmlFor={ id }>{ placeholder }</label>
        </div>
    )
}

export default InputForm;