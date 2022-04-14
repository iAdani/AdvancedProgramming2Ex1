import React from "react";
import "./Chat.css";
import AttachButton from "./AttachButton";
import { GetNickname, GetLastSeen } from "../DBAdapater";

function Chat(props) {
  let date, time = GetLastSeen(props.activeChat)
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerInfo">
          <i class="btn bi bi-person-circle"></i>
          <span>
            <p>{GetNickname(props.activeChat)}</p>
            <span>Last seen on...</span>
          </span>
        </div>
      </div>
      <div className="chat__body">
        <Message
          msg={{ message: "potato", time: "now" }}
        />
      </div>

      <div className="chat__footer">
        <AttachButton />
        <form>
          <input placeholder="Type a message" type="text" />
          <button
            type="button"
            background="none"
          >
            <i
              class="bi bi-send" />
          </button>
        </form>
      </div>
    </div>
  );
}

function Message({ msg }) {
  return (
    <p className={`chat__message ${true && "chat__reciever"}`}>
      {msg.message}
      <span className="chat__timestamp">{msg.time}</span>
    </p>
  )
}

export default Chat;
