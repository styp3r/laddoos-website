import React from 'react';

function BuyItem(props){
    return(
        <div className = "buyItem">
            <img className = "roundedCorners" src = {props.image} width = "350" height = "300"/>
            <h3>{props.title}</h3>
        </div>
    );
}

export default BuyItem;