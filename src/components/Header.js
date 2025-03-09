import React, { useState } from "react";
import { LOGO_LINK } from "../utils/constants.js/constants";

const Header = () => {
  const [logbutton, setlogbutton] = useState("Login");
  return (
    <div className="header">
      <img className="logo" src={LOGO_LINK}></img>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>Menu</li>
          <li>Cart</li>
          <button
            onClick={() => {
             logbutton == "Login" ? setlogbutton("Logout"


                
             ) : setlogbutton("Login")
            }}
          >
            {logbutton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
