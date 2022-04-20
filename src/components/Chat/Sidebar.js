import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import {
  GetLastMessage,
  GetContacts,
  GetNickname,
  GetChat,
  GetImage
} from "../../DBAdapater";
import AddContactButton from "./AddContactButton";
import LogoutButton from "./LogoutButton";

function Sidebar(props) {
  const contacts = GetContacts(props.activeUser);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(contacts);

  useEffect(() => {
    if (contacts !== undefined){
      const filteredContacts = contacts.filter((name) =>
        GetNickname(name).toLowerCase().includes(search.toLowerCase())
      );
      setFilter(filteredContacts);
    }
  }, [search]);

  const displayChats = () => {
    if (filter !== undefined) {
      return (
        <>
          {filter.map((contact) => (
            <SidebarChat
              setActiveContact={props.setActiveContact}
              contact={contact}
              nickname={GetNickname(contact)}
              lastMessage={GetLastMessage(GetChat(props.activeUser, contact))}
              key={contact}
            />
          ))}
        </>
      )
    }
    return <></>;
  }

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <span>
        <img src={GetImage(props.activeUser)} />
          {/* <span>{GetNickname(props.activeUser)}</span> */}
        </span>
        <span>
          <AddContactButton />
          <LogoutButton />
        </span>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <i className="bi bi-search"></i>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search or start new chat"
            type="text"
          />
        </div>
      </div>

      <div className="sidebar__chats">
        {displayChats()}
      </div>
    </div>
  );
}

export default Sidebar;
