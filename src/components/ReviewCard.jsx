import React from 'react';

function ReviewCard(props){

    return (
        <div className = "reviewCard">
            <img className = "imgCrop"  src = {props.img} width= "200" height = "200"/>
            <h3 className = "textPosition">{props.text}</h3>
            <h3 className = "textPosition">{props.rating}</h3>
        </div>
    );
}

export default ReviewCard;