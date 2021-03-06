import React from 'react';

function Item(props){
    return(        
    <div className = "singleItem">
        <img className = "itemImg"  src = {props.img} width= "200" height = "200"/>
        <h3 className = "itemTitle">{props.title}</h3>
    </div>);
}

export default Item;