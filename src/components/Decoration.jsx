import React from 'react';
import Button from './Button.jsx';

function Decoration(props){
    return (
        <div className = "decoration spacing">
            <h1 className = "decText">The tradition gets alive at Laddoos, the choice is difficult to make, indulge and intoxicate your senses with every bite.</h1>
            <Button cName = "decBtn" buttonText = "Explore Menu"/>
            <img src = {props.img} width = "100%" height = "100%"/>
        </div>
    );
}

export default Decoration;