import React, { useState } from "react";
import "./Chat.css";
import AttachButton from "./AttachButton";
import { GetNickname, GetLastSeen, Message } from "../DBAdapater";
import SendButton from "./SendButton";
import $ from 'jquery';
import LogoutButton from "./LogoutButton";

function Chat(props) {
  const [messageInput, setMessageInput] = useState("");

  const sendMessage = (e) => {
    const d = new Date();
    const newMsg = new Message(true, String(d.getHours()).padStart(2,'0') + ':' + String(d.getMinutes()).padStart(2,'0'), e);
    props.curChat.push(newMsg);
    setMessageInput("");
  };

  const submitMessage = (e) => {
    e.preventDefault();
    if (messageInput !== '') {
      sendMessage(messageInput);
      $('#chatBody').scrollTop(0);
    }
  }

  let k = 1; // Unique key for messages

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
        <LogoutButton activeUser={props.activeUser} />
      </div>

      <div id='chatBody' className="chat__body">
        {props.curChat.map((msg) => (
          <p
            className={`chat__message ${msg.activeUserSent && "chat__reciever"
              }`}
            key={k++}
          >
            {msg.message}
            <span className="chat__timestamp">{msg?.time} </span>
          </p>
        )).reverse()}
      </div>

      <div className={"chat__footer"}>
        <AttachButton />
        <form onSubmit={submitMessage}>
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
