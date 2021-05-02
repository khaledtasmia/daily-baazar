import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import '../../App.css';
import { useForm } from "react-hook-form";

const OrderPlaced = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const onSubmit = data => {
        const userData = { ...loggedInUser};

          const url = `https://boiling-meadow-92410.herokuapp.com/addOrder`;

          fetch(url, {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(userData)
          })
          .then(res => res.json())
          .then(data => console.log(data));
    }

    const style = {
        marginTop: "100px",
        border: "1px solid black",
        borderRadius: "5px",
        width: "450px",
        height: "280px",
        padding: "20px",
    }

    return (
        <div className="container">
            <div>
                <Header></Header>
            </div>
            <div className="d-flex justify-content-center">
                <div style={style}>
                    <h3 className="text-center">Order Confirmation</h3>
                    <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
                        <input style={{ marginTop: "5px" }} defaultValue={loggedInUser.name} name="name" placeholder="Full Name" required></input>
                        <br />
                        <input style={{ marginTop: "5px" }} defaultValue={loggedInUser.email} name="email" placeholder="Email Address" required></input>
                        <br />
                        <input style={{ marginTop: "5px" }} name="address" placeholder="Address" required></input>
                        <br />
                        <input style={{ marginTop: "5px" }} name="number" placeholder="Phone Number" required></input>
                        <br />
                        <input style={{ marginTop: "10px", width: "180px" }} className="btn btn-success" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderPlaced;