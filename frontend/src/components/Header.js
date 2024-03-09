import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import searchLogo from "../assets/search-line.png"
import offerLogo from "../assets/percent-line.svg"
import accountLogo from "../assets/account-circle-line.svg"
import cartLogo from "../assets/shopping-cart-line.svg"
import { useContext } from "react";
import userContext from "../utils/userContext";

const Header = () => {
    const user = useContext(userContext);
    return (
        <div className="headerContainer">
            <img src={Logo} className="logoHeader" alt="CraveCartLogo"></img>
            <ul className="navbarList">
                <li>
                    <img src={searchLogo} alt="searchAlt"></img>
                    Search
                </li>
                <li>
                    <img src={offerLogo} alt="searchAlt"></img>
                    <Link to="/about">Offers</Link>
                </li>
                <li>
                    <img src={accountLogo} alt="searchAlt"></img>
                    <Link to="/signUp">Account</Link>
                </li>
                <li>
                    <img src={cartLogo} alt="searchAlt"></img>
                    Cart
                </li>
                <li>
                    {user.userName}
                </li>
            </ul>
        </div>
    );
}

export default Header;