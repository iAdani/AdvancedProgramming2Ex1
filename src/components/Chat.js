import React from 'react'
// import { useNavigate } from 'react-router-dom'
import "./Chat.css"
// import { } from '../DBAdapter.js'

function Chat(props) {
    return (
        <div className="chat">
            <div className="chat__header">
                <i class="btn bi bi-person-circle"></i>
                <div className="chat__headerInfo">
                    <h4>{props.activeChat}</h4>
                    <p>Last seen at...</p>
                </div>
            </div>

            <div className="chat__body">
                {/* only add chat__reciever if some condition is true-> message.name === user.displayName */}
                <p className={`chat__message ${true && 'chat__reciever'}`}>Hello bitches
                    <span className="chat__timestamp">3:54pm</span>
                </p>
            </div>

            <div className="chat__footer">
                <h4>
                    <i class="bi bi-paperclip"></i>
                </h4>
                <form>
                    <input placeholder="Type a message" type="text" />
                    <button type="submit">Send a message</button>
                </form>
            </div>
        </div>
    )
}

export default Chat