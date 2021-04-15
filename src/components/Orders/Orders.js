import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Orders = () => {

    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://boiling-meadow-92410.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    const style = {
        border: '1px solid grey',
        width: '400px',
        height: "130px",
        textAlign: "center",
        marginLeft: '400px'
    }

    return (
        <div className="container">
            <div>
                <Header></Header>
            </div>
            <div>
                <h2 style={{ color: "grey", marginBottom: "50px" }}>User Information</h2>
            </div>
            <div>
                {
                    orders.map(order => <h4 style={style}> Id: {order._id} <br /> Name : {order.name} <br /> Email: {order.email}</h4>)
                }
            </div>
        </div>
    );
};

export default Orders;