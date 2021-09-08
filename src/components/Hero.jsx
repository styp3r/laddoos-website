import React from 'react';
import Sweet7 from '../images/sweet7.jpg';
import Button from './Button.jsx';

function Hero(){
    return (
        <div className = "heroContent">
            <div>
                <h1 className = "heroText">Taste the goodness at Laddoos.</h1>
                <Button cName = "heroButton" buttonText = "Explore Menu"/>
            </div>
            <img src = {Sweet7} width = "100%" height = "100%"/>
        </div>
    );
}

export default Hero;
