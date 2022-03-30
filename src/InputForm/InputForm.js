
function InputForm({ placeholder, type, id }) {
    return(
        <div className="form-floating mb-3">
            <input id={ id } type={ type } placeholder={ placeholder } className="form-control" />
            <label htmlFor={ id }>{ placeholder }</label>
        </div>
    )
}

export default InputForm;