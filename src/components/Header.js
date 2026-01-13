import LogoUrl  from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState("Login");
    const isOnline = useOnlineStatus();

    return (
        <div className="header">
         <div className="logo-container">
            <img className="img" src={LogoUrl} alt="logo" />
         </div>
         <div className="nav">
            <ul>
                <li>Online Status: {isOnline ? "✔️" : "❌"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <button className="login-btn" onClick={() => isLoggedIn === "Login" ? setIsLoggedIn("Logout") : setIsLoggedIn("Login")}>{isLoggedIn}</button>
            </ul>
         </div>
        </div>
    );
}

export default Header;