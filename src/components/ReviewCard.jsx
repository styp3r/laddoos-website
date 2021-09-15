import React from 'react';

function ReviewCard(props){

    return (
        <div className = "reviewCard">
            <div className = "cardTop">
                <img className = "imgCrop"  src = {props.img} width= "200" height = "200"/>
            </div>
            <h3 className = "textPosition">{props.rating}</h3>
            <h3 className = "textPosition">{props.text}</h3>
        </div>
    );
}

export default ReviewCard;