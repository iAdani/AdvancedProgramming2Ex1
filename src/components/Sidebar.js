import React, { useState, useEffect } from 'react';
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import { GetLastMessage, GetContacts, GetNickname } from '../DBAdapater';


function Sidebar(props) {
    var nickname = GetNickname(props.activeUser);
    const contacts = GetContacts(props.activeUser);

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState(contacts);

    useEffect(() => {
        const filteredContacts = contacts.filter((name) =>
        GetNickname(name).toLowerCase().includes(search.toLowerCase()));
        setFilter(filteredContacts)
    }, [search]);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <span><i className="btn bi bi-person-circle"></i>{nickname}</span>
                <i className="btn bi bi-person-plus"></i>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <i className="bi bi-search"></i>
                    <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search or start new chat"
                    type="text" />
                </div>
            </div>

            <div className="sidebar__chats">
                { filter.map((contact) => (
                    <SidebarChat 
                    setActiveChat={props.setActiveChat}
                    contact={contact}
                    nickname={GetNickname(contact)} 
                    lastMessage={GetLastMessage(props.activeUser, contact)}/>
                ))}
            </div>
        </div>
    )
}

export default Sidebar