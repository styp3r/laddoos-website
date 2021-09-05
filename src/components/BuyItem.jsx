import React from 'react';

function BuyItem(props){
    return(
        <div className = "buyItem">
            <img src = {props.image} width = "250" height = "200"/>
            <h3>{props.title}</h3>
        </div>
    );
}

export default BuyItem;