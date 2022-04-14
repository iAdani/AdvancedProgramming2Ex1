import { useState, useEffect } from 'react'
import './ChatsScreen.css'
import Sidebar from './Sidebar';
import Chat from './Chat'
import { GetChats } from '../DBAdapater';

export default function ChatsScreen({ activeUser }) {

    const [activeChat, setActiveChat] = useState("");
    const chats = new Map();

    useEffect(() => {
        chats.set(activeChat, GetChats(activeUser, activeChat))
    }, [activeChat]);

    return (
        <div className="chats__body">
            <Sidebar
                activeUser={activeUser}
                activeChat={activeChat}
                setActiveChat={setActiveChat} />
            <Chat
                chat={chats.get(activeChat)}
                activeUser={activeUser}
                activeChat={activeChat} />
        </div>
    );
}