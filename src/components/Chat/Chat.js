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
import $ from "jquery";
import Audio from "./Audio";

export default function Chat(props) {
  const [messageInput, setMessageInput] = useState("");

  var k = 1; // Unique key for messages

  // Hides the header and footer when no chat is active
  const footerDisplay = useEffect(() => {
    if (props.curContact === "") {
      $("#chatFooter").hide();
      $("#chatHeader").hide();
    } else {
      $("#chatFooter").show();
      $("#chatHeader").show();
    }
  });

  // Sends text message to the chat
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
    if (msg.Type === "image")
      return <img className="chatImage" src={msg.Content} />;
    if (msg.Type === "video")
      return (
        <video className="chatVideo" src={msg.Content} controls="controls" />
      );
  };

  // Displays all messages in chat
  const displayMessages = () => {
    if (props.curChat === undefined) return <></>;
    return (
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
        <form onSubmit={(e) => sendText(e)}>
          <input
            value={messageInput}
            onChange={(e) => {
              setMessageInput(e.target.value);
            }}
            placeholder="Type a message..."
            type="text"
          />

          <div id="audioButtonContainer">
            <button className="audioButton">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M192 352c53.03 0 96-42.97 96-96v-160c0-53.03-42.97-96-96-96s-96 42.97-96 96v160C96 309 138.1 352 192 352zM344 192C330.7 192 320 202.7 320 215.1V256c0 73.33-61.97 132.4-136.3 127.7c-66.08-4.169-119.7-66.59-119.7-132.8L64 215.1C64 202.7 53.25 192 40 192S16 202.7 16 215.1v32.15c0 89.66 63.97 169.6 152 181.7V464H128c-18.19 0-32.84 15.18-31.96 33.57C96.43 505.8 103.8 512 112 512h160c8.222 0 15.57-6.216 15.96-14.43C288.8 479.2 274.2 464 256 464h-40v-33.77C301.7 418.5 368 344.9 368 256V215.1C368 202.7 357.3 192 344 192z" />
              </svg>
            </button>
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
}
