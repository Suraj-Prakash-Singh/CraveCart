import { Link } from "react-router-dom"
import signUpBg from "../assets/signup.png";
import leftArrow from "../assets/leftArrow.svg";
import { useState } from "react";

const SignUp = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function callSignUp(){
        console.log("in signUp")
        const requestOptions = {
            method: 'POST',
            headers: {
                'username' : username,
                'email' : email,
                'password' : password
            }
        };
        const res = await fetch('http://localhost:3000/signup', requestOptions)
        const json = await res.json();
        console.log(json);
    }

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
                    <input type="text" placeholder="Please enter your full name" value={username} 
                        onChange={(e) => {setUserName(e.target.value)}}>
                    </input>
                    <input type="text" placeholder="Please enter your email" value={email}
                        onChange={(e) => {setEmail(e.target.value)}}>
                    </input>
                    <input type="password" placeholder="Please create your password" value={password}
                        onChange={(e) => {setPassword(e.target.value)}}>
                    </input>
                    <button onClick={()=> callSignUp()}>SignUp</button>
                </div>
                <div className="signInBottomLinkContainer">
                <img src={leftArrow}></img><span><Link className="sp" to="/">Go Back To Homepage</Link></span>
                </div>
            </div>
        </div>
    )
}

export default SignUp;