import React from 'react';

function CatItem(props){
    return (
        <div className = "catItem">
            <img className = "roundedCorners" src = {props.catImg} width = "350" height = "300"/>
            <p>{props.catName}</p>
        </div>
    );
}

export default CatItem;