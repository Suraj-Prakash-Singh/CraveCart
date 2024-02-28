import { Link } from "react-router-dom"
import signUpBg from "../assets/signup.png";
import leftArrow from "../assets/leftArrow.svg";

const SignUp = () => {
    return (
        <div className="signUpRoot">
            <div className="leftImgContainer">
                <img src={signUpBg}></img>
            </div>
            <div className="signUpInfoContainer">
                <h2>Signup to get started</h2>
                <div className="signInRedirect">
                    <p>Already have an account?<Link to="/login"><span> Login Here</span></Link></p>
                </div>
                <div className="inputBoxContainer">
                    <input type="text" placeholder="Please enter your full name"></input>
                    <input type="text" placeholder="Please enter your email"></input>
                    <input type="password" placeholder="Please create your password"></input>
                    <button>SignUp</button>
                </div>
                <div className="signInBottomLinkContainer">
                <img src={leftArrow}></img><span><Link className="sp" to="/">Go Back To Homepage</Link></span>
                </div>
            </div>
        </div>
    )
}

export default SignUp;