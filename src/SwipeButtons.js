import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faTimes, faUndo, faBolt } from '@fortawesome/free-solid-svg-icons';
import "./SwipeButtons.css";

const  SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <FontAwesomeIcon icon={faUndo} className="swipeButtons__undo" size="2x"/>
            <FontAwesomeIcon icon={faTimes} className="swipeButtons__times" size="2x"/>
            <FontAwesomeIcon icon={faStar} className="swipeButtons__star" size="2x"/>
            <FontAwesomeIcon icon={faHeart} className="swipeButtons__heart" size="2x"
            
            
            
            
            
            
            />
            <FontAwesomeIcon icon={faBolt} className="swipeButtons__bolt" size="2x"/>
        </div>
    );
}

export default SwipeButtons;
