import React, { useContext } from 'react';
import { UserContext } from '../../App';
import SideNav from '../SideNav/SideNav';

const Admin = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="container d-flex justify-content-center">
            <div>
                <SideNav></SideNav>
            </div>
            <div>
                <h2 style={{ marginBottom: "20px" }}>Add Product</h2>
                <form action="/addItem" method="POST">
                    <h4>Product Name</h4>
                    <input type="text" placeholder="Enter Name" name="name" />
                    <br />
                    <h4>Weight</h4>
                    <input type="text" placeholder="Enter Weight" name="weight" />
                    <br />
                    <h4>Price</h4>
                    <input style={{ marginBottom: "5px" }} type="text" placeholder="Enter Price" name="price" />
                    <br />
                    <input type="file" name="" />
                    <br />
                    <br />
                    <button>Submit</button>
                </form>
            </div >
        </div>
    );
};

export default Admin;