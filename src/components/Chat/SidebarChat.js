import React from "react";
import "./SidebarChat.css";
import { GetImage } from "../../DBAdapater";

export default function SidebarChat(props) {
  const lastMessage = (msg) => {
    if (msg === undefined) return "";
    if (msg.Type === "text") return <span className="sidebar__overflow">{msg.Content.length<43 ? msg.Content : msg.Content.substring(0,43) + "..."}</span>;
    if (msg.Type === "image")
      return (
        <span>
          <i className="bi bi-card-image" /> Image
        </span>
      );
    if (msg.Type === "video")
      return (
        <span>
          <i className="bi bi-film" /> Video
        </span>
      );
    else
      return (
        <span>
          <i className="bi bi-mic-fill" /> Voice Message
        </span>
      );
  };

  const lastMessageTime = props.lastMessage.Time;

  // if(props.lastMessage > 43) {
  //   text = snippet.substring(0, 1024)//cuts to 1024
  //   last = text.lastIndexOf(" ")//gets last space (to avoid cutting the middle of a word)
  //   text = text.substring(0, last)//cuts from last space (to avoid cutting the middle of a word)
  //   text = text + ` (...)`//adds (...) at the end to show that it's cut
  //   }

  return (
    <div
      className="sidebarChat"
      onClick={() => props.setActiveContact(props.contact.toLowerCase())}
    >
      <span>
        <img alt={props.contact} src={GetImage(props.contact)} />
        <div className="sidebarChat__info">
          <h2>{props.nickname}</h2>
          <p>{lastMessage(props.lastMessage)}</p>
        </div>
      </span>
      <span>
        <div className="lastMessageTime">{lastMessageTime}</div>
      </span>
    </div>
  );
}

{
  /* <div style={{ display: "flex" , justifyContent : "flex-end", width : "100%"}}>
          <div style={{ display: "flex" }}>{lastMessageTime}</div>
        </div> */
}
