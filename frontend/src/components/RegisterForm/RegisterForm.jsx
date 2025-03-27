import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc} from 'firebase/firestore';
import { serverTimestamp } from '@firebase/firestore'
import { SlArrowLeftCircle } from "react-icons/sl";
import { db } from '../../utils/firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// import bcrypt from 'bcryptjs';

import './RegisterForm.css';

const auth = getAuth();
const RegisterForm = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            console.log("Passwords do not match");
        }
        else {

            // Encrypts user password using Bcryptjs.
            // const hashedPassword = bcrypt.hashSync(password, 10);

            // await addDoc(collection(db, "users"), {
            //     firstname: firstName,
            //     lastname: lastName,
            //     username: userName,
            //     email: email,
            //     password: hashedPassword,
            //     createdAt: serverTimestamp()
            // });


            // Added user authentication using Firebase Auth instead of Bcryptjs for more security.
            const userCreds = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCreds.user;

            await addDoc(collection(db, "users"), {
                uid: user.uid,
                firstname: firstName,
                lastname: lastName,
                username: userName,
                email: email,
                createdAt: serverTimestamp()
            });


            console.log("User registered");
            navigate("/");
        }
    };

    const handleBack = () => {
        navigate("/");
    };

    return (
        <div className='wrapper'>
            <span onClick={handleBack}><SlArrowLeftCircle /></span>
            <h1>Register</h1>
            <form action={handleRegister}>
                <div className='input-box'>
                    <input 
                        type='text' 
                        placeholder='First Name' 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className='input-box'>
                    <input 
                        type='text' 
                        placeholder='Last Name' 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className='input-box'>
                    <input 
                        type='text' 
                        placeholder='User Name' 
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className='input-box'>
                    <input 
                        type='email' 
                        placeholder='Email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='input-box'>
                    <input 
                        type='password' 
                        placeholder='Password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='input-box'>
                    <input 
                        type='password' 
                        placeholder='Confirm Password' 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type='submit'>Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;