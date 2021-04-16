import React from 'react';
import './SideNav.css';

const SideNav = () => {
    return (
        <div className="sideNav">
            <h3 style={{marginBottom: "20px", color: "white"}}>Daily Baazar</h3>
            <a style={{textDecoration: "none", fontSize: "20px", color: "white"}} href="#manage">Manage Product</a>
            <br/>
            <a style={{textDecoration: "none", fontSize: "20px", color: "white"}} href="#add">Add Product</a>
            <br/>
            <a style={{textDecoration: "none", fontSize: "20px", color: "white"}} href="#edit">Edit Product</a>
        </div >
    );
};

export default SideNav;