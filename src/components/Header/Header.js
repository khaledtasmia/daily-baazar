import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <Link style={{ textDecoration: "none", marginTop: "10px" }} to="/home">
                        <a class="navbar-brand" href="#home"><h3>Daily Baazar</h3></a>
                    </Link>
                </div>
                <div class="nav justify-content-end" style={{ marginRight: "10px" }}>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ">
                            <Link style={{ textDecoration: "none" }} to="/home">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#home"><h6>Home</h6></a>
                                </li>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/orders">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#destination"><h6>Orders</h6></a>
                                </li>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/admin">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#blog"><h6>Admin</h6></a>
                                </li>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/deals">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#contact"><h6>Deals</h6></a>
                                </li>
                            </Link>
                            {
                                loggedInUser.email ?
                                    <Link style={{ textDecoration: "none" }} to="/login">
                                        <li>
                                            <h6 style={{marginLeft: "5px"}} className="text-success">{loggedInUser.name}</h6>
                                        </li>
                                    </Link> : <Link style={{ textDecoration: "none" }} to="/login">
                                        <li>
                                            <button style={{ width: "50px", padding: "5px", marginRight: "10px" }} type="button" class="btn btn-success">Login</button>
                                        </li>
                                    </Link>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;