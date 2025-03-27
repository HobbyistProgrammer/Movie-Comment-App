import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";

// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../../utils/firebase';

// import bcrypt from 'bcryptjs';

import './LoginSignup.css';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginSignup = () => {

    // const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/check-auth', { 
          method: 'GET', 
          credentials: 'include'  // Send cookies with the request
        })
        .then((response) => {
          if (response.ok) {
            console.log('User is authenticated');  // Logging to confirm success
            navigate('/movies');  // Redirect to movies page if authenticated
          } else {
            console.log('User is not authenticated, status:', response.status);  // Logging the response status
          }
        })
        .catch((error) => {
          console.error('Error checking authentication:', error);  // Logging errors
        });
      }, [navigate]);

    // const handleLogin = async () => {
    //     const querySnapshot = await getDocs(collection(db, "users"));
        
    //     var isUser = false;
        
    //     querySnapshot.forEach((doc) => {
    //         // console.log(`${doc.id} => ${doc.get("firstname")}`);
    //         if(doc.get("username") === username) {
    //             if(bcrypt.compareSync(password, doc.get("password"))){
    //                 isUser = true;
    //                 // console.log("User is authenticated");
    //             }
    //         }
    //     });

    //     try {
    //         const userCreds = await signInWithEmailAndPassword(getAuth(), email, password);

    //         const token = await userCreds.user.getIdToken();
    //         localStorage.setItem("token", token);

    //         console.log("User is authenticated: ", userCreds.user);

    //         navigate("movies");
    //     } catch (error) {
    //         console.error("Login Failed: ", error);
    //     }
    // };

    const handleLoginToken = async () => {
        try {
            const auth = getAuth();
            const userCreds = await signInWithEmailAndPassword(auth, email, password);
            const token = await userCreds.user.getIdToken();

            await fetch("http://localhost:5000/login", {
                method: "POST",
                credentials: "include", // This allows Cookies to be sent with the request
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token }),
            });

            console.log("User is authenticated: ", userCreds.user);
            navigate("/movies");

        } catch (error) {
            console.error("Login failed: ", error);
        }
    };


    return (
        <div className='wrapper'>
            <form action={handleLoginToken}>
                <h1>Login</h1>
                <div className='input-box'>
                    { /* <input 
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} 
                    /> */ }
                    <input 
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <FaUser className='icons'/>
                </div>
                <div className='input-box'>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className='icons'/>
                </div>

                {/* TODO: Remember me and Forgot password */}
                <div className="remember-password">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type='submit'>Login</button>

                <div className="register-link">
                    <p>Don't have an account? <a href="/register">Register</a></p>
                </div>
            </form>
        </div>
    );
};

export default LoginSignup;