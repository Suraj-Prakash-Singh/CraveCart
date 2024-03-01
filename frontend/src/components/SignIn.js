import { Link } from "react-router-dom";
import logIn from "../assets/login.png"
import leftArrow from "../assets/leftArrow.svg";
import { useState } from "react";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function callLogin(){
        console.log("in login")
        const requestOptions = {
            method: 'POST',
            headers: {
                'email' : email,
                'password' : password
            }
        };
        const res = await fetch('http://localhost:3000/login', requestOptions)
        const json = await res.json();
        console.log(json);
    }

    return (
        <div className="signInRoot">
            <div className="loginImgContainer">
                <img src={logIn}></img>
            </div>
            <div className="signInInfoContainer">
                <h2>Login to order food</h2>
                <div className="signInRedirect">
                    <p>Haven't signedup yet?<Link to="/signup"><span> Signup Here</span></Link></p>
                </div>
                <div className="inputBoxContainer">
                    <input type="text" placeholder="Please enter your email" 
                        onChange={(e) => setEmail(e.target.value)}>
                    </input>
                    <input type="password" placeholder="Please enter your password"
                        onChange={(e) => setPassword(e.target.value)}>
                    </input>
                    <button onClick={()=> callLogin()}>Login</button>
                </div>
                <div className="signInBottomLinkContainer">
                <img src={leftArrow}></img><span><Link className="sp" to="/">Go Back To Homepage</Link></span>
                </div>
            </div>
        </div>
    )
}

export default SignIn;