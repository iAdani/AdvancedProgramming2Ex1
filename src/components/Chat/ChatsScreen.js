import { useState, useEffect } from "react";
import "./ChatsScreen.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { GetChat } from "../../DBAdapater";
import NotLogged from "../Forms/NotLogged";

export default function ChatsScreen({ activeUser }) {

  const [activeContact, setActiveContact] = useState('');
  const [curChat, setCurChat] = useState(undefined);
  
  useEffect(() => {
    if (activeContact !== '') {
      setCurChat(GetChat(activeUser, activeContact));
    }
  }, [activeContact]);

    // if (activeUser === '') {
    //   return <NotLogged />;
    // }

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
