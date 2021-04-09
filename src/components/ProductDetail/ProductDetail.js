import React from 'react';

const ProductDetail = (props) => {

    const { name, quantity, price } = props.product;

    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{name}</td>
                        <td>1</td>
                        <td>{price}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <th>Total</th>
                    <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col">{price}</th>
                </tfoot>
            </table>
        </div>
    );
};

export default ProductDetail;