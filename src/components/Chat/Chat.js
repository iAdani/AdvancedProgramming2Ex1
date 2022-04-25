import $ from "jquery";
import React, { useState } from "react";
import {
  AddMessage,
  GetImage,
  GetLastSeen,
  GetNickname,
} from "../../DBAdapater";
import AttachButton from "./AttachButton";
import "./Chat.css";
import SendButton from "./SendButton";
import SendVoiceButton from "./SendVoiceButton";

export default function Chat(props) {
  const [messageInput, setMessageInput] = useState("");
  const typing = messageInput !== "";
  let k = 1; // Unique key for messages

  // Sends text message to the chat
  const sendMessage = (e, type, content) => {
    e.preventDefault();
    if (content !== "") {
      AddMessage(props.curChat, props.activeUser, type, content);
      cleanUp();
    }
  };

  // Make everything work smoothly
  const cleanUp = () => {
    setMessageInput("");
    const upd = !props.updateLastMessage;
    props.setUpdateLastMessage(upd);
    $("#chatBody").scrollTop(0);
  };

  // Adds sender design to messages
  const isSender = (msg) => {
    return msg.Sender === props.activeUser ? "chat__sender" : "";
  };

  // Displays the message by type
  const displayMessageContent = (msg) => {
    if (msg.Type === "text") return <span>{msg.Content}</span>;
    else if (msg.Type === "image")
      return <img className="chatImage" src={msg.Content} />;
    else if (msg.Type === "video")
      return (
        <video className="chatVideo" src={msg.Content} controls="controls" />
      );
    else {
      return (
        <>
          <audio className="chatAudio" controls>
            <source src={msg.Content} type="audio/mp3" />
          </audio>
          <img
            className="audioAvatar"
            alt={msg.Sender}
            src={GetImage(msg.Sender)}
          />
        </>
      );
    }
  };

  // Displays all messages in chat
  const displayMessages = () => {
    return props.curChat === undefined ? (
      <></>
    ) : (
      <>
        {props.curChat.Messages.map((msg) => (
          <div className={"chat__message " + isSender(msg)} key={k++}>
            {displayMessageContent(msg)}
            <span className="chat__timestamp">{msg.Time}</span>
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      {props.curContact !== "" ? (
        <div className="chat">
          <div id="chatHeader" className="chat__header">
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

          <div id="chatFooter" className={"chat__footer"}>
            <AttachButton {...props} cleanUp={cleanUp} />
            <form
              onSubmit={(e) => {
                {
                  sendMessage(e, "text", messageInput);
                }
              }}
            >
              <input
                value={messageInput}
                onChange={(e) => {
                  setMessageInput(e.target.value);
                }}
                placeholder="Type a message..."
                type="text"
              />
              {typing ? <SendButton /> : <></>}
            </form>
            {!typing ? <SendVoiceButton sendMessage={sendMessage} /> : <></>}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
