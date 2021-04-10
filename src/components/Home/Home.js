import React from 'react';
import Container from '@material-ui/core/Container';
import Header from '../Header/Header';
import { useState } from 'react';
import { useEffect } from 'react';
import Products from '../Products/Products';


const Home = () => {

    const [totalProducts, setTotalProducts] = useState([]);

    useEffect(() => {
        fetch('https://boiling-meadow-92410.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setTotalProducts(data))
    }, [])
    console.log(totalProducts);

    return (
        <Container fixed>
            <div>
                <div>
                    <Header></Header>
                </div>
                <div className="container">
                    {
                        totalProducts.map( product => <Products product={product}></Products>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default Home;