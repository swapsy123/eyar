import React from 'react'
import Avatar from 'react-avatar';
import './Chat.css';
import { Link } from "react-router-dom"

function Chat({ name, message, profilePic, timestamp }) {
    return (
        <Link to={`/chat/${name}`}>
        <div className="chat">
          <Avatar className="chat__image" round={true} alt={name} src={profilePic} size={70} />
          <div className="chat__details">
              <h2>{name}</h2>
              <p>{message}</p>
          </div>
          <p className="chat__timestamp">{timestamp}</p>
        </div>
        </Link>
    )
}

export default Chat
