import { useState, useEffect } from "react";
import "./ChatsScreen.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { GetChat } from "../DBAdapater";
import NotLogged from "./NotLogged";

export default function ChatsScreen({ activeUser }) {

  const [activeContact, setActiveContact] = useState("");
  const [curChat, setCurChat] = useState([]);
  const chats = new Map();

  useEffect(() => {
    if (!chats.has(activeContact)) {
      chats.set(activeContact, GetChat(activeUser, activeContact));
    }
    setCurChat(chats.get(activeContact));
  }, [activeContact]);

    useEffect(() => {
        if (!chats.has(activeContact)) {
            chats.set(activeContact, GetChat(activeUser, activeContact))
        }
        setCurChat(chats.get(activeContact))
    }, [activeContact]);

    if (activeUser === '') {
      return <NotLogged />;
    }

    return (
        <div className="chats__body">
            <Sidebar
                activeUser={activeUser}
                activeContact={activeContact}
                setActiveContact={setActiveContact} />
            <Chat
                curChat={curChat}
                activeUser={activeUser}
                curContact={activeContact} />
        </div>
    );
}
