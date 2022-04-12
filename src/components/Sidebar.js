import React, { useState } from 'react';
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import { GetLastMessage, GetContacts, GetNickname } from '../DBAdapater';


function Sidebar(props) {
    var nickname = GetNickname(props.activeUser);
    const contacts = GetContacts(props.activeUser);

    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState(contacts);


    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <span><i class="btn bi bi-person-circle"></i>{nickname}</span>
                <i class="btn bi bi-person-plus"></i>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <i class="bi bi-search"></i>
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>

            <div className="sidebar__chats">
                {filter.map((contact) => (
                    <SidebarChat
                    nickname={GetNickname(contact)} 
                    lastMessage={GetLastMessage(props.activeUser, contact)}/>
                ))}
            </div>
        </div>
    )
}

export default Sidebar