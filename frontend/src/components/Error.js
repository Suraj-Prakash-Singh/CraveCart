import { useRouteError } from "react-router";
import bgImg from "../assets/errorBg.png";
import { Link } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(bgImg)
    console.log(error)
    return (
        <div className="outerDiv">
            <img className="errorBg" src={bgImg}></img>
            <div className="errorMsgContainer">
                <div className="upperOne">
                    <h1>Oops!</h1>
                    <p className="para">Looks like this page is taking a 🍔 lunch break. Our chefs are cooking up something tasty 🍕elsewhere, head back to the homepage.</p>
                    <h4>We'll be back with a full plate soon! 🍽️</h4>
                </div>
                <div className="lowerOne">
                    <Link to="/"><button className="goBackBtn">Go Back to Homepage</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Error;