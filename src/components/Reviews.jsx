import React from 'react';

function Reviews(props){
    return(
        <div className = "reviewsContainer">
            <img src = {props.img} width= "200" height = "200"/>
            <h3>{props.text}</h3>
        </div>
    );
}

export default Reviews;
