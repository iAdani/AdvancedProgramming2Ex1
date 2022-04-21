import React from "react";
import "./SidebarChat.css";
import { GetImage } from "../../DBAdapater";

export default function SidebarChat(props) {
  return (
    <div className="sidebarChat" onClick={() => props.setActiveContact(props.contact.toLowerCase())}>
        <img src={GetImage(props.contact)} />
        <div className="sidebarChat__info">
          <h2>{props.nickname}</h2>
          <p>{props.lastMessage}</p>
        </div>
    </div>
  );
}
