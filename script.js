import React from "react";
import ReactDom from "react-dom/client";
import Logo from "./resources/Logo.svg";
import foodImg from "./resources/burger.png"

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

const Body = () => {
    return (
        <div className="bodyContainer">
            <div className="heading">
                <h2>Featured items in your area</h2>
            </div>
            <div className="cardsContainer">
                <FoodCard></FoodCard>
                <FoodCard></FoodCard>
                <FoodCard></FoodCard>
                <FoodCard></FoodCard>
                <FoodCard></FoodCard>
                <FoodCard></FoodCard>
                <FoodCard></FoodCard>
                <FoodCard></FoodCard>
                <FoodCard></FoodCard>
                <FoodCard></FoodCard>
                <FoodCard></FoodCard>
                <FoodCard></FoodCard>
            </div>
        </div>
    );
}

const Footer = () => {
    return (<div className="footerContainer"></div>);
}

const FoodCard = () => {
    return (
        <div className="foodCard">
            <img alt="burgerImg" src={foodImg}></img>
            <div className="foodCardMetaData">
                <p>Classic Cheeseburger</p>
                <p>$9.95</p>
                <p>4.4</p>
                <p>45 minutes</p>
            </div>
        </div>
    )
}
const AppLayout = () => (
    <>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
    </>
)
const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<AppLayout/>);