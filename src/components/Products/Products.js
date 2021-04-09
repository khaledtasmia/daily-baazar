import React from 'react';
import { useHistory } from 'react-router';

const Products = (props) => {

    const { image, name, price, _id } = props.product;

    const history = useHistory()

    const handleBuyNow = (id) => {
        history.push(`/checkOut/${id}`);
    }

    return (
            <div style={{ display: "inline-flex", flexWrap: "wrap", margin: "30px"}}>
                <div className="card shadow bg-body rounded" style={{ width: "300px", height: "300px"}}>
                    <img src={image} style={{ width: "50%", display: "block", marginLeft: "auto", marginRight: "auto"}} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                    </div>
                    <div className="d-flex card-footer" style={{padding: "10px"}}>
                        <h4>{price}</h4>
                        <button onClick={() => handleBuyNow(_id)} style={{marginLeft: "130px"}} className="btn btn-success">Buy Now</button>
                    </div>
                </div>
            </div>
    );
};

export default Products;