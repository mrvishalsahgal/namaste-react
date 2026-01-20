import LogoUrl from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContex";
import { useContext } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  const isOnline = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between shadow-lg">
      <div className="logo-container">
        <img className="w-24" src={LogoUrl} alt="logo" />
      </div>
      <div className="p-5 m-5">
        <ul className="flex gap-3">
          <li>Online Status: {isOnline ? "✔️" : "❌"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="login-btn"
            onClick={() =>
              isLoggedIn === "Login"
                ? setIsLoggedIn("Logout")
                : setIsLoggedIn("Login")
            }
          >
            {isLoggedIn}
          </button>
          <li>
            <Link to="" className="text-xl">
              {loggedInUser}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
