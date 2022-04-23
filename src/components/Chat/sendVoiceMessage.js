import React, { useState } from "react";
import { AddMessage } from "../../DBAdapater";

export default function SendVoiceButton() {
  const [note, setNote] = useState(null);
  const [recording, setRecording] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  var constraints = {audio: true}

  const record = () => {
    
  }

  

  return (
    <div className="container">
      <button>
        <audio></audio>
      </button>
    </div>
  );
}
