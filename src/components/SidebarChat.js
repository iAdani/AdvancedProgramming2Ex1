import React from 'react'
import './SidebarChat.css'

function SidebarChat(props) {
  return (
    <div className="sidebarChat">
        <i class="bi bi-person-circle"></i>
        <div className="sidebarChat__info">
            <h2>Contact Name</h2>
            <p>Last message...</p>
        </div>
    </div>
  )
}

export default SidebarChat