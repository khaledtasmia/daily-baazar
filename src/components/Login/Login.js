import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import '../../../src/App.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';
import '../../App.css';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory()
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/checkOut/:id" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [newUser, setNewUser] = useState(false);

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();

    const style = {
        marginTop: "100px",
        marginLeft: "350px",
        border: "1px solid black",
        borderRadius: "5px",
        width: "400px",
        height: "250px",
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
        //console.log(user.email, user.password);
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(response => {
                    // Signed in
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    const { displayName, photoURL, email } = response.user;
                    const signedInUser = { name: displayName, email };
                    setLoggedInUser(signedInUser);
                    history.replace(from);
                    // console.log("sign in user info", response.user);
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
                const signedInUser = { name: displayName, email };
                setLoggedInUser(signedInUser);
                history.replace(from);
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
                const signedInUser2 = { name: displayName, email };
                setLoggedInUser(signedInUser2);
                history.replace(from);

                console.log(displayName, photoURL, email);
            })
            .catch(error => {
                console.log(error);
                console.log(error.message);
            })
    }

    return (
        <div className="container">
            <div>
                <Header></Header>
            </div>
            <div className="App">
                <button onClick={handleFbSignIn} style={fbButtonStyle}>Continue With Facebook</button>
                <br />
                <button onClick={handleGoogleSignIn} style={fbButtonStyle}>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;