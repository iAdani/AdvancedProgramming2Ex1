import React, { useState } from 'react';
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import { GetChats, GetNickname } from '../DBAdapater';

function Sidebar(props) {
    var nickname = GetNickname(props.activeUser);
    
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("")

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <i class="btn bi bi-person-circle"></i>
                <h4>{nickname}</h4>
                <i class="btn bi bi-person-plus"></i>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <i class="bi bi-search"></i>
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar