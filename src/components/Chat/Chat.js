import React, { useState, useEffect } from "react";
import "./Chat.css";
import AttachButton from "./AttachButton";
import {
  GetNickname,
  GetLastSeen,
  AddMessage,
  GetImage,
} from "../../DBAdapater";
import SendButton from "./SendButton";
import $ from 'jquery';
import Audio from "./Audio";


export default function Chat(props) {
  const [messageInput, setMessageInput] = useState("");

  var k = 1; // Unique key for messages

  const footerDisplay = useEffect(() => {
    if(props.curContact === '') {
      $('#chatFooter').hide();
      $('#chatHeader').hide();
    }
    else {
      $('#chatFooter').show();
      $('#chatHeader').show();
    }
  })

  const sendText = (e) => {
    e.preventDefault();
    if (messageInput !== "") {
      AddMessage(
        props.curChat,
        props.activeUser,
        getTime(),
        "text",
        messageInput
      );
      cleanUp();
    }
  };

  const cleanUp = () => {
    setMessageInput("");
    const upd = !props.updateLastMessage
    props.setUpdateLastMessage(upd);
    $("#chatBody").scrollTop(0);
  };


  const isImage = (msg) => {
    if (msg.Type === 'image') return ''
    return '';
  }

  const isReciever = (msg) => {
    return msg.Sender === props.activeUser ? "chat__sender" : "";
  };

  const displatMessageContent = (msg) => {
    if (msg.Type === "text") return <span>{msg.Content}</span>;
    if (msg.Type === "image") return (
      <img className="chatImage" src={msg.Content} />
    )
  }

  const displayMessages = () => {
    if (props.curChat === undefined) return <></>;
    return (
      <>
        {props.curChat.Messages.map((msg) => (
          <div className={isImage(msg) + " chat__message " + isReciever(msg)} key={k++}>
            {displatMessageContent(msg)}
            <span className="chat__timestamp">{msg.Time}</span>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="chat">
      <div id='chatHeader' className="chat__header">
        <div className="chat__headerInfo">
          <img src={GetImage(props.curContact)} />
          <span>
            <p>{GetNickname(props.curContact)}</p>
            <span>{GetLastSeen(props.curContact)}</span>
          </span>
        </div>
      </div>

      <div id="chatBody" className="chat__body">
        <div>{displayMessages()}</div>
      </div>

      <div id='chatFooter' className={"chat__footer"}>
        <AttachButton {...props} cleanUp={cleanUp} />
        <form onSubmit={(e) => sendText(e)}>

          <input
            value={messageInput}
            onChange={(e) => {
              setMessageInput(e.target.value);
            }}
            placeholder="Type a message..."
            type="text"
          />

          <div id='audioButtonContainer'>
            <button className="audioButton"><i className="bi bi-mic"/></button>
          </div>
          <SendButton sendText={sendText} message={messageInput}></SendButton>

        </form>
      </div>
    </div>
  );
}

export function getTime() {
  const d = new Date();
  const time =
    String(d.getHours()).padStart(2, "0") +
    ":" +
    String(d.getMinutes()).padStart(2, "0");
  return time;
};