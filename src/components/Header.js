import React from "react"
import { LOGO_LINK } from "../utils/constants.js/constants"

const Header = () =>{
    return(
        <div className="header">
       
            <img className = "logo" src={LOGO_LINK}></img>
       
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>Menu</li>                           
                <li>Cart</li>
            </ul>
        </div>
        </div>

    )
}

export default Header