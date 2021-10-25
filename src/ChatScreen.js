import React, { useState } from "react";
import './chatscreen.css';
import Avatar from "react-avatar";
import profilePic from "./Chat"

function ChatScreen() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            name: 'Fraser',
            image: 'https://www.biography.com/.image/t_share/MTM2OTI2NTY2Mjg5NTE2MTI5/justin_bieber_2015_photo_courtesy_dfree_shutterstock_348418241_croppedjpg.jpg',
            message: 'Whats up'
        },
        {
            name: 'Mark',
            image: 'https://www.biography.com/.image/t_share/MTM2OTI2NTY2Mjg5NTE2MTI5/justin_bieber_2015_photo_courtesy_dfree_shutterstock_348418241_croppedjpg.jpg',
            message: 'Hows it going'
        },
        {

            message: 'Wag1'
        },
    ]);
    
const handleSend = e => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput('');
}

    return (
        <div>
            <p className="chatScreen__timestamp">YOU MATCHED WITH ELLEN ON 10/08/2020</p>
            {messages.map(message => (
                message.name ? (
                    <div className='chatScreen__message'>
                    <Avatar
                    className="chat__image"
                    round={true}
                    alt={message.name}
                    src={message.image}
                    size={70} />
                <p className="chatScreen__text">{message.message}</p>
               </div>
                ) : (
                    <div className='chatScreen__message'>
                <p className="chatScreen__textUser">{message.message}</p>
               </div>

               
                )
 ))}


    <form className="chatScreen__input">
    <input
    value={input}
    onChange={(e) => setInput(e.target.value)}
    className="chatScreen__inputfield"
    placeholder= "Type a message.."
    type= "text"
    />
    <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
    </form>


        </div>
    );

}


export default ChatScreen;
