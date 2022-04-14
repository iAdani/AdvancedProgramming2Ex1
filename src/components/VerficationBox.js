import React from 'react'
import './VerificationBox.css'

function VerficationBox() {
  return (
    <div id="pswd-info">
        <h4>VerficationBox!!!</h4>
        <ul>
        <li id="letter" className="invalid">At least <strong>one letter</strong></li>
        <li id="capital" className="invalid">At least <strong>one capital letter</strong></li>
        <li id="number" className="invalid">At least <strong>one number</strong></li>
        <li id="length" className="invalid">Be at least <strong>8 characters</strong></li>
    </ul>
    </div>
  )
}

export default VerficationBox