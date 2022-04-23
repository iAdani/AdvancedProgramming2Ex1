import React from "react";
import { AddMessage } from "../../DBAdapater";

export default function SendVoiceButton() {
  const potato = navigator.mediaDevices.getUserMedia({ audio: true });
  return (
    <div className="container">
      <button>
        <audio></audio>
      </button>
    </div>
  );
}
