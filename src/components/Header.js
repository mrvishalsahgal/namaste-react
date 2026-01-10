import LogoUrl  from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState("Login");

    return (
        <div className="header">
         <div className="logo-container">
            <img className="img" src={LogoUrl} alt="logo" />
         </div>
         <div className="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <button className="login-btn" onClick={() => isLoggedIn === "Login" ? setIsLoggedIn("Logout") : setIsLoggedIn("Login")}>{isLoggedIn}</button>
            </ul>
         </div>
        </div>
    );
}

export default Header;