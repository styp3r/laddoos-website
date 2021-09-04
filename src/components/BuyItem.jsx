import React from 'react';

function BuyItem(props){
    return(
        <div className = "buyItem">
            <img src = {props.image}/>
            <h3>{props.title}</h3>
            <h4>{props.price}</h4>
            <button>Add To Cart</button>
        </div>
    );
}

export default BuyItem;