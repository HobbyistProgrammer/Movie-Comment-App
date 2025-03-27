import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CiUser } from "react-icons/ci";
import { MdOutlinePassword, MdEmail } from "react-icons/md";
import './LoginSignup.css';

import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyD8GyBygYfIqtikGtJFMX25JyRQqlqGrT0",
    authDomain: "usermoviecomments.firebaseapp.com",
    projectId: "usermoviecomments",
    storageBucket: "usermoviecomments.firebasestorage.app",
    messagingSenderId: "85045592547",
    appId: "1:85045592547:web:7839cd9897879b05bae0d6"
});

const LoginSignup = () => {

    const [action, setAction] = useState("Sign Up");

    const handleButtonClick = () => {
        if (action === "Sign Up") {
            console.log("Sign Up");
        } else {
            console.log("Login");
        }
    }

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>

            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {setAction("Login")}}>Login</div>
            </div>

            <div className="inputs">
                {action === "Login" ? 
                    <div>

                    </div> 
                :
                    <div className="input">
                        <span className="icons"><CiUser /></span>
                        <input type="text" placeholder="Username"></input>
                    </div>
                }
                
                <div className="input">
                <span className="icons"><MdEmail /></span>
                    <input type="text" placeholder="Email"></input>
                </div>
                <div className="input">
                <span className="icons"><MdOutlinePassword /></span>
                    <input type="password" placeholder="Password"></input>
                </div>
            </div>
            {action === "Sign Up" ?
                <div>
                </div>
            :
                <div className="forgot-password"><span>Forgot Password?</span></div>
            }
            <div className="submit-container">
                <div className="submit">
                    <span onClick={handleButtonClick}>{action}</span>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;