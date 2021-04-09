import React from 'react';
import fakeData from '../../components/FakeData/fakedata.json'

const Admin = () => {

    const handleAddProduct = () => {
        fetch('http://localhost:5000/addItem', {
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