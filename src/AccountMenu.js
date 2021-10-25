import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import "./accountmenu.css"
import Slider from "./Slider"
// import Mobiles from "./Mobiles"

function AccountMenu () {
    return (

        <div className={"accountmenu"} path="./">

              <div className={""}>  <h3 className={"accountmenu__titletext"}>account settings</h3> </div>
              <div className={"accountmenu__cont"}>  <h3 className={"accountmenu__text"}>manage payment account</h3>
              <FontAwesomeIcon className={"accountmenu__icon"} icon={faAngleRight} /> </div>

              <div className={"accountmenu__cont"}>  <h3 className={"accountmenu__text"}>email</h3>
              <FontAwesomeIcon className={"accountmenu__icon"} icon={faAngleRight} /> </div>


{/* Insert <Mobiles/> in here */}
              <div className={"accountmenu__cont"}>  <h3 className={"accountmenu__text"}>phone number</h3>
              <FontAwesomeIcon className={"accountmenu__icon"} icon={faAngleRight} /> </div>

              <div className={"accountmenu__cont"}>  <h3 className={"accountmenu__text"}>promo code</h3>
              <FontAwesomeIcon className={"accountmenu__icon"} icon={faAngleRight} /> </div>

              <div className={""}>  <p className={"accountmenu__dividertext"}>Verify your phone number and email to help secure your account.</p> </div>
              <div className={""}>  <h3 className={"accountmenu__titletext"}>discovery settings</h3> </div>

              <div className={"accountmenu__cont"}>  <h3 className={"accountmenu__text"}>location</h3>
              <FontAwesomeIcon className={"accountmenu__icon"} icon={faAngleRight} /> </div>

              <div className={"accountmenu__distancecontainer"}>  <h3 className={"accountmenu__text"}>distance preference</h3>
              
              <div className={"accountmenu__slidercontainer"} ><Slider className={"accountmenu__slidercontainer"} /></div>
              
              <div className={"accountmenu__cont"}>  <p className={"accountmenu__dividertext"}>Only show people in this range</p></div></div>
{/* instet toggle button here */}

                <div className={"accountmenu__cont"}>  <h3 className={"accountmenu__text"}>Looking for</h3>
              <FontAwesomeIcon className={"accountmenu__icon"} icon={faAngleRight} /> </div>
 
              <div className={"accountmenu__distancecontainer"}>  <h3 className={"accountmenu__text"}>Age preference</h3></div>


              <div className={"accountmenu__slidercontainer"} ><Slider className={"accountmenu__slidercontainer"} /></div>
              <div className={"accountmenu__cont"}>  <p className={"accountmenu__dividertext"}>Only show people in this range</p></div>
{/* Insert Toggle Button Here */}
              <div className={"accountmenu__cont"}>  <h3 className={"accountmenu__text"}>Global</h3></div>
{/* Insert Toggle Button Here */}
<div className={""}>  <p className={"accountmenu__dividertext"}>Going global will allow you to see people from around the world.</p> </div>


        </div>


        
    )
}

export default AccountMenu

