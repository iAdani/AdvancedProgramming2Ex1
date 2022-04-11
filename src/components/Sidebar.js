import React from 'react'
import "./Sidebar.css"
import SidebarChat from "./SidebarChat"

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar__header">
            <span><i class="btn bi bi-person-circle"></i> Ben Gvir</span>
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
            <SidebarChat />
            <SidebarChat />
        </div>
    </div>
  )
}

export default Sidebar