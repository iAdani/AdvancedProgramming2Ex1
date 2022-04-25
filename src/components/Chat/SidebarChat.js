import React from "react";
import "./SidebarChat.css";
import { GetImage } from "../../DBAdapater";

export default function SidebarChat(props) {
  const lastMessage = (msg) => {
    if (msg === undefined) return "";
    if (msg.Type === "text") return <span>{msg.Content}</span>;
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

  return (
    <div
      className="sidebarChat"
      onClick={() => props.setActiveContact(props.contact.toLowerCase())}
    >
      <img alt={props.contact} src={GetImage(props.contact)} />
      <div className="sidebarChat__info">
        <h2>{props.nickname}</h2>
        <p>{lastMessage(props.lastMessage)}</p>
      </div>
    </div>
  );
}
