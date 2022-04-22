import React, { useState, useEffect } from "react";
import "./Chat.css";
import AttachButton from "./AttachButton";
import { GetNickname, GetLastSeen, AddMessage, GetImage } from "../../DBAdapater";
import SendButton from "./SendButton";
import $ from 'jquery';
import Audio from "./Audio";

function Chat(props) {
  const [messageInput, setMessageInput] = useState("");

  var k = 1; // Unique key for messages

  const footerDisplay = useEffect(() => {
    if(props.curContact === '') {
      $('#chatFooter').hide();
    }
    else $('#chatFooter').show();
  })

  const sendMessage = (input) => {
    const sender = props.activeUser;
    const reciever = props.curContact;
    const d = new Date();
    const time = String(d.getHours()).padStart(2,'0') + ':' + String(d.getMinutes()).padStart(2,'0');
    AddMessage(props.curChat, sender, reciever, time, 'text', input);
    setMessageInput("");
  };

  const submitMessage = (e) => {
    e.preventDefault();
    if (messageInput !== '') {
      sendMessage(messageInput);
      $('#chatBody').scrollTop(0);
    }
  }


  const isReciever = (msg) => {
    if (msg.Sender === props.activeUser) return 'chat__reciever'
    return ''
  }

  const displayMessages = () => {
    if (props.curChat === undefined) return <></>
    return (
      <>
        {props.curChat.Messages.map((msg) => (
          <p
            className={'chat__message ' + isReciever(msg)}
            key={k++}
          >
            {msg.Content}
            <span className="chat__timestamp">{msg.Time}</span>
          </p>
        ))}
      </>
    )
  }

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerInfo">
          <img src={GetImage(props.curContact)} />
          <span>
            <p>{GetNickname(props.curContact)}</p>
            <span>{GetLastSeen(props.curContact)}</span>
          </span>
          
        </div>
      </div>

      <div id='chatBody' className="chat__body">
        <div>{displayMessages()}</div>
      </div>

      <div id='chatFooter' className={"chat__footer"}>
        <AttachButton {...props} />
        <form onSubmit={submitMessage}>
          <input
            value={messageInput}
            onChange={(e) => {setMessageInput(e.target.value)}}
            placeholder="Type a message..."
            type="text"
          />
          <div id='audioButtonContainer'>
            <button className="audioButton"><i className="bi bi-mic"/></button>
          </div>
          <SendButton
            sendMessage={sendMessage}
            message={messageInput}
          />
        </form>
      </div>
    </div>
  );
}

export default Chat;
