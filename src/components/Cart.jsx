import React from 'react';
import CartItem from './CartItem.jsx';
import CartSummary from '../CartSummary.js'; 

function Cart(){


    function createCartItem(item){
        return(<CartItem title = {item.title} name = {item.name} price = {item.price} totalPrice = {item.totalPrice}/>);
    }


    return (
        <div id = "list">
            <h1>My Cart</h1>
            <hr/>
            {CartSummary.map(createCartItem)}
        </div>);
}

export default Cart;