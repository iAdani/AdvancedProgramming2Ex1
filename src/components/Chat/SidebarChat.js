import React from "react";
import "./SidebarChat.css";

export default function SidebarChat(props) {
  return (
    <div className="sidebarChat" onClick={() => props.setActiveContact(props.contact.toLowerCase())}>
        <i className="bi bi-person-circle"></i>
        <div className="sidebarChat__info">
          <h2>{props.nickname}</h2>
          <p>{props.lastMessage}</p>
        </div>
    </div>
  );
}
