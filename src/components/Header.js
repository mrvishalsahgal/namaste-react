import LogoUrl  from "../utils/constant";
import { useState } from "react";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState("Login");

    return (
        <div className="header">
         <div className="logo-container">
            <img className="img" src={LogoUrl} alt="logo" />
         </div>
         <div className="nav">
            <ul>
                <li>Homes</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
                <button className="login-btn" onClick={() => isLoggedIn === "Login" ? setIsLoggedIn("Logout") : setIsLoggedIn("Login")}>{isLoggedIn}</button>
            </ul>
         </div>
        </div>
    );
}

export default Header;