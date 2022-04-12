import { useState } from 'react'
import './ChatsScreen.css'
import Sidebar from './Sidebar';
import Chat from './Chat'

export default function ChatsScreen({ activeUser }) {
    const [activeChat, setActiveChat] = useState("");
    return (
        <div className="chats__body">
            <Sidebar
                activeUser={activeUser}
                activeChat={activeChat} />
            <Chat
                activeUser={activeUser}
                activeChat={activeChat} />
        </div>
    );
}