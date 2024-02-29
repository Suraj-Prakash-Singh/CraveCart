import { Link } from "react-router-dom";
import logIn from "../assets/login.png"
import leftArrow from "../assets/leftArrow.svg";
import { useEffect } from "react";

const SignIn = () => {
    // useEffect(()=> {
    //     callSignUp();
    // },[])
    async function callSignUp(){
        console.log("in signup")
        const requestOptions = {
            method: 'POST'
        };
        const res = await fetch('http://localhost:3000/signup', requestOptions)
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
                    <input type="text" placeholder="Please enter your email"></input>
                    <input type="password" placeholder="Please enter your password"></input>
                    <button>Login</button>
                </div>
                <div className="signInBottomLinkContainer">
                <img src={leftArrow}></img><span><Link className="sp" to="/">Go Back To Homepage</Link></span>
                </div>
            </div>
        </div>
    )
}

export default SignIn;