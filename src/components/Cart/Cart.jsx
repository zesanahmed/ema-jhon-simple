import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    // const cart = props.cart;
    // const {cart} = props;

    console.log(cart);

    let total = 0;
    let totalShippig = 0;
    for (const product of cart) {
        total = total + product.price;
        totalShippig = totalShippig + product.shipping;
    }
    const tax = total * 7 / 100;
    const grandTotal = total + totalShippig + tax;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping: ${totalShippig}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>

        </div>
    );
};

export default Cart;