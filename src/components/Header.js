import Logo from "../assets/Logo.svg";

const Header = () => {
    return (
    <div className="headerContainer">
        <img src={Logo} className="logoHeader" alt="CraveCartLogo"></img>
        <ul className="navbarList">
            <li>Search</li>
            <li>Offers</li>
            <li>Account</li>
            <li>Cart</li>
        </ul>
    </div>
    );
}

export default Header;