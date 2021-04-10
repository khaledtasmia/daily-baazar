import React from 'react';
import fakeData from '../../components/FakeData/fakedata.json'

const Admin = () => {

    const handleAddProduct = () => {
        fetch('https://boiling-meadow-92410.herokuapp.com/addItem', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(fakeData)
        })
    }
    return (
        <div className="container">
            <button onClick={handleAddProduct}>Add Product</button>
        </div>
    );
};

export default Admin;