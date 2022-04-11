import React from 'react'
import './VerificationBox.css'

function VerficationBox() {
  return (
    <div id="pswd-info">
        <h4>VerficationBox!!!</h4>
        <ul>
        <li id="letter" class="invalid">At least <strong>one letter</strong></li>
        <li id="capital" class="invalid">At least <strong>one capital letter</strong></li>
        <li id="number" class="invalid">At least <strong>one number</strong></li>
        <li id="length" class="invalid">Be at least <strong>8 characters</strong></li>
    </ul>
    </div>
  )
}

export default VerficationBox