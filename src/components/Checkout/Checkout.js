import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Header from '../Header/Header';
import ProductDetail from '../ProductDetail/ProductDetail';

const Checkout = () => {

    const {id} = useParams();

    const history = useHistory()

    const handleCheckOutBtn = (id) => {
        history.push(`/orderPlaced/${id}`);
    }

    const [product, setProduct] = useState({});

    useEffect( () => {
        fetch('http://localhost:5000/product/'+id)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [id])

    return (
        <div className="container">
            <div>
                <Header></Header>
            </div>
            <div>
                <h3 style={{ color: "grey" }}>Checkout</h3>
            </div>
            <div style={{ margin: "50px" }}>
                <ProductDetail product={product}></ProductDetail>
                <button onClick={() => handleCheckOutBtn(id)} style={{ float: "right", marginTop: "3px" }} className="btn btn-success">Checkout</button>
            </div>
        </div>
    );
};

export default Checkout;