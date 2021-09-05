import React from 'react';

function CatItem(props){
    return (
        <div className = "catItem">
            <img src = {props.catImg} width = "250" height = "200"/>
            <p>{props.catName}</p>
        </div>
    );
}

export default CatItem;