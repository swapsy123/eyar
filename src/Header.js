import React from 'react';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUsers, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from "react-router-dom";


function Header({ backButton }) {
    const history = useHistory();
    return (
        // BEM
        <div className="header">
            {backButton ?  (
            <button onClick={() => history.replace(backButton)}>
                <FontAwesomeIcon  className="header__icon" icon={faArrowLeft} size="2x" />
            </button>
            ):(
                <Link to="./profile">
                <FontAwesomeIcon  className="header__icon" icon={faUsers} size="2x" />
                </Link>
            )}

            <Link to="./">
            <img
            className="header__logo"
            src="https://ediblemachine.co.uk/wp-content/uploads/2020/09/herbey-logo.png" alt="herbey logo"/>
            </Link>
            <Link to="./chats">
            <FontAwesomeIcon className="header__icon" icon={faEnvelope} size="2x"/>
            </Link>
        </div>
    )
}

export default Header

