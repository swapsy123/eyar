import React from 'react'
import './Chat.css';

function Mobile({ name, message, timestamp }) {
    return (
        <div className="chat">
          <div className="chat__details">
              <h2>{name}</h2>
              <p>{message}</p>
          </div>
          <p className="chat__timestamp">{timestamp}</p>
        </div>
    )
}

export default Mobile