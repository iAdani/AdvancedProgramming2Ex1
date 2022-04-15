import React, { useEffect } from "react";
import "./Chat.css";
import AttachButton from "./AttachButton";
import { GetNickname, GetLastSeen } from "../DBAdapater";
import SendButton from "./SendButton";

function Chat(props) {
  var chat = props.curChat;

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerInfo">
          <i className="btn bi bi-person-circle"></i>
          <span>
            <p>
              {GetNickname(props.activeContact)}
            </p>
            <span>
              {GetLastSeen(props.activeContact)}
            </span>
          </span>
        </div>
      </div>

      <div className="chat__body">
        {chat.map((msg) => (
          <p className={`chat__message ${msg.activeUserSent && "chat__reciever"}`}>
            {msg.message}
            <span className="chat__timestamp">{msg.time}</span>
          </p>
        ))}
      </div>

      <div className="chat__footer">
        <AttachButton />
        <form>
          <input placeholder="Type a message" type="text" />
          <SendButton />
        </form>
      </div>
    </div>
  );
}

export default Chat;
