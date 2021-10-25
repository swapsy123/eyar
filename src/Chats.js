import React from 'react'
import './chats.css'
import Chat from "./Chat";

function Chats() {
    return <div className="chats">
        <Chat
        name="Mark"
        message="yo what's up"
        timestamp="20 seconds ago"
        profilePic="https://www.biography.com/.image/t_share/MTM2OTI2NTY2Mjg5NTE2MTI5/justin_bieber_2015_photo_courtesy_dfree_shutterstock_348418241_croppedjpg.jpg"
        />
        <Chat
        name="Mark"
        message="How's it going?"
        timestamp="40 seconds ago"
        profilePic="https://www.biography.com/.image/t_share/MTM2OTI2NTY2Mjg5NTE2MTI5/justin_bieber_2015_photo_courtesy_dfree_shutterstock_348418241_croppedjpg.jpg"
        />
        <Chat
        name="Mark"
        message="What's new with you?"
        timestamp="55 seconds ago"
        profilePic="https://www.biography.com/.image/t_share/MTM2OTI2NTY2Mjg5NTE2MTI5/justin_bieber_2015_photo_courtesy_dfree_shutterstock_348418241_croppedjpg.jpg"
        />
        </div>;
    
}

export default Chats;
