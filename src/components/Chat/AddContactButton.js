import { React, useRef, useState } from "react";
import "./AddContactButton.css";
import { UserExists } from "../../DBAdapater";

function AddContactButton(props) {
  const activeUser = props.activeUser;
  // console.log(activeUser)
  const [disabled, setDisabled] = useState(true);
  // console.log("Disbaled is", disabled);
  const usernameRef = useRef();

  const changeHandler = () => {
    const userExists = !(
      UserExists(usernameRef.current.value) &&
      activeUser !== usernameRef.current.value
    );

    if (disabled !== userExists) setDisabled(userExists);
  };

  const addToContacts = () => {
    const newContact = props.contacts.push(usernameRef.current.value)
    props.setContacts(newContact)
  };

  return (
    <div>
      <button
        type="button"
        className="btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i className="bi bi-person-plus"></i>
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add new contact
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={addToContacts}>
              <div className="modal-body">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Contact's username"
                    ref={usernameRef}
                    onChange={changeHandler}
                  />
                  <label htmlFor="floatingInput">Contact's username</label>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  id="addContact"
                  disabled={disabled}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddContactButton;
