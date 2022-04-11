import React from 'react'

function AttachButton() {
  return (
    // <!-- Default dropup button -->
    <div class="btn-group dropup">
        <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-paperclip"></i>
        </button>

        <ul class="dropdown-menu">
            <li>
                <a class= "dropdown-item" href="#">
                <h4><i class="bi bi-image"></i></h4>
                </a>
            </li>

            <li>
                <a class= "dropdown-item" href="#">
                <h4><i class="bi bi-camera-video"></i></h4>
                </a>
            </li>

            <li>
                <a class= "dropdown-item" href="#">
                <h4><i class="bi bi-mic"></i></h4>
                </a>
            </li>

        </ul>
    </div>
  )
}

export default AttachButton