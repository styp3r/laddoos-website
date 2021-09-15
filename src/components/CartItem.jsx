import React from 'react';

function CartItem(props){
    return(<div>
        <div className = "cartList">
            <h2 className = "cartItemTitle">{props.title}</h2>
            <button className = "subtractQuant">-</button>
            <input type="number" placeholder = "0" id={props.name} className = "cartQuant" min="1"></input>
            <button className = "addQuant">+</button>
            <h2 className = "itemPrice">{props.price}</h2>
            <h2 className = "totalPricePerItem">{props.totalPrice}</h2>
            <button className = "deleteItem">Remove</button>
        </div>
        <div className = "orderSummary"></div>
        </div>
    );
}

export default CartItem;