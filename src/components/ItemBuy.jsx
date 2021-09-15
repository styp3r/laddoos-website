import React, {useState} from 'react';
import CartSummary from '../CartSummary.js';
 
function ItemBuy(props){
    
    const [quant, updateQ] = useState(0);

    var cartItem = {
        id: CartSummary.length,
        title: props.title,
        name: props.name,
        price: props.price,
        //totalPrice: quant*(props.price)
    };

    var val = 0;
    function updateQuant(){
        val = document.getElementById(props.name).value;
        updateQ(val);

    }

    function updateCart(){
        //send order details to cart
        CartSummary.push(cartItem);
        alert("Quantity of "+props.title+" = " + quant + "\nPayment systems are currently offline.");
    }


    return(  
        <div className = "singleItem">
        <img className = "itemImg"  src = {props.img} width= "200" height = "200"/>
        <h3 className = "itemTitle">{props.title}</h3>
        <h4 className = "itemPrice">{props.price}</h4>
        <input type="number" onChange = {updateQuant} placeholder = "0" id={props.name} className = "quantity" min="1"></input>
        <button onClick = {updateCart} type = "button" className = "addToCart">Add to Cart</button>
    </div>);
}

export default ItemBuy; 