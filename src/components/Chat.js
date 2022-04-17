import React, { useState } from "react";
import "./Chat.css";
import AttachButton from "./AttachButton";
import { GetNickname, GetLastSeen, Message } from "../DBAdapater";
import SendButton from "./SendButton";

function Chat(props) {
  const [messageInput, setMessageInput] = useState("");

  const sendMessage = (e) => {
    const newMsg = new Message(true, Date(), e);
    props.curChat.push(newMsg);
    setMessageInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerInfo">
          <i className="btn bi bi-person-circle"></i>
          <span>
            <p>{GetNickname(props.curContact)}</p>
            <span>{GetLastSeen(props.curContact)}</span>
          </span>
        </div>
      </div>

      <div className="chat__body">
        {props.curChat.map((msg) => (
          <p
            className={`chat__message ${
              msg.activeUserSent && "chat__reciever"
            }`}
            key={msg.time}
          >
            {msg.message}
            <span className="chat__timestamp">{msg?.time} </span>
          </p>
        ))}
      </div>

      <div className={"chat__footer"}>
        <AttachButton />
        <form>
          <input
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder="Type a message..."
            type="text"
          />
          <SendButton
            sendMessage={sendMessage}
            message={messageInput}
          ></SendButton>
        </form>
      </div>
    </div>
  );
}

export default Chat;
