import React from 'react'
// import { useNavigate } from 'react-router-dom'
import "./Chat.css"
import AttachButton from './AttachButton'

function Chat(props) {
    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerInfo">
                  <i className="btn bi bi-person-circle"></i>
                  <span><p>Contact Name</p><span>Last seen at...</span></span>
                </div>
            </div>

            

            <div className="chat__body">
                {/* only add chat__reciever if some condition is true-> message.name === user.displayName */}
                <p className={`chat__message ${true && 'chat__reciever'}`}>Hello bitches
                    <span className="chat__timestamp">3:54pm</span>
                </p>
            </div>


        <div className="chat__footer">
            <AttachButton />
            <form>
                <input placeholder="Type a message" type="text" />
                <button type="submit">
                    <i className="bi bi-send"></i>
                </button>
            </form>
        </div>
        </div>
    )
}

export default Chat