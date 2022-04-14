import React from "react";
import './AddContactButton.css';

function AddContactButton() {
  return (
    <div>
      <button
        type="button"
        class="btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i class="bi bi-person-plus"></i>
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add new contact
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Contact's username"
                />
                <label for="floatingInput">Contact's username</label>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" class="btn btn-primary">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddContactButton;
