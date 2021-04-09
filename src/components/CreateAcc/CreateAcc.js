import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import '../../../src/App.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';

const CreateAcc = () => {

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();


    const [newUser, setNewUser] = useState();

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const style = {
        marginTop: "100px",
        marginLeft: "350px",
        border: "1px solid black",
        borderRadius: "5px",
        width: "430px",
        height: "300px",
        padding: "20px",
    }

    const fbButtonStyle = {
        border: "1px solid lightGrey",
        backgroundColor: "white",
        borderRadius: "10px",
        width: "200px",
        marginTop: "5px"
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === "email") {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === "password") {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (event) => {
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(response => {
                    // Signed in
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    // ...
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false
                    setUser(newUserInfo);
                });
        }
        event.preventDefault();
    }

    const handleFbSignIn = () => {
        firebase.auth().signInWithPopup(fbProvider)
            .then((result) => {
                const { displayName, email } = result.user;
                var credential = result.credential;
                // The signed-in user info.
                var user = result.user;
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var accessToken = credential.accessToken;
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(result => {
                const { displayName, photoURL, email } = result.user;
                var credential = result.credential;
                var user = result.user;
                var accessToken = credential.accessToken;
            })
            .catch(error => {
                console.log(error);
                console.log(error.message);
            })
    }

    return (
        <div>
            <div className="container">
                <div>
                    <Header></Header>
                </div>
                <div className="App">
                    <div style={style}>
                        <h3>Create An Account</h3>
                        <form onSubmit={handleSubmit}>
                            <input style={{ marginTop: "5px" }} type="text" name="name" on placeholder="Name" required></input>
                            <br />
                            <input style={{ marginTop: "5px" }} type="text" name="email" onBlur={handleBlur} placeholder="Username or Email" required></input>
                            <br />
                            <input style={{ marginTop: "5px" }} type="password" name="password" onBlur={handleBlur} placeholder="Password" required></input>
                            <br />
                            <input style={{ marginTop: "5px" }} type="password" name="confirm_password" onBlur={handleBlur} placeholder="Confirm Password" required></input>
                            <br />
                            <input style={{ marginTop: "10px", width: "180px" }} className="btn btn-success" type="button" value="Create An Account"></input>
                            <p style={{ marginTop: "5px" }}>Already have an account? <Link to="/login" className="text-success">Login</Link></p>
                        </form>
                    </div>
                    <div>
                        <h6>Or</h6>
                        <button onClick={handleFbSignIn} style={fbButtonStyle}>Continue With Facebook</button>
                        <br />
                        <button onClick={handleGoogleSignIn} style={fbButtonStyle}>Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAcc;