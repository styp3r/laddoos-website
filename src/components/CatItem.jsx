import React from 'react';

function CatItem(props){
    return (
        <div className = "catItem">
            <img src = {props.catImg}/>
            <p>{props.catName}</p>
        </div>
    );
}

export default CatItem;