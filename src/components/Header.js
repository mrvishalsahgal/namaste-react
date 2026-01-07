import LogoUrl  from "../utils/constant";

const Header = () => {
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
            </ul>
         </div>
        </div>
    );
}

export default Header;