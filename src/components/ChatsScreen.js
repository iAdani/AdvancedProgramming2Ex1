import './ChatsScreen.css'
import Sidebar from './Sidebar';
import Chat from './Chat'

export default function ChatsScreen() {

    return (
        <div className="chats__body">
            <Sidebar />
            <Chat />
        </div>
    );
}