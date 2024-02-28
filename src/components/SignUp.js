import { Link } from "react-router-dom"
import signUpBg from "../assets/signup.png";

const SignUp = () => {
    return (
        <div className="signUpRoot">
            <div className="leftImgContainer">
                <img src={signUpBg}></img>
            </div>
            <div className="signUpInfoContainer">
                <h2>Signup to get started</h2>
                <div className="signInRedirect">
                    <p>Already have an account?<Link><span> Login Here</span></Link></p>
                </div>
                <div className="inputBoxContainer">
                    <input type="text" placeholder="Please enter your full name"></input>
                    <input type="text" placeholder="Please enter your email"></input>
                    <input type="password" placeholder="Please create your password"></input>
                    <button>SignUp</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp;