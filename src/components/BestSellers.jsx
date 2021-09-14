import React from 'react';
import BuyItem from './BuyItem.jsx';
import Button from './Button.jsx';
import MandalaLeft from '../images/mandalaLeft.png';

function BestSellers(){
    return (
        <div className = "bestDiv">
            <h1 className = "bestsellerHeading">Our Best Sellers</h1>
            <div className = "bestContainer spacing">
            
                <BuyItem image = "https://bit.ly/3h4NOw9" title = "One"/>
                <BuyItem image = "https://bit.ly/3h4NOw9" title = "Two"/>
                <BuyItem image = "https://bit.ly/3h4NOw9" title = "Three"/>
                <img className = "mandalaLeft" src = {MandalaLeft} width = "350" height = "350"/>
            </div>
           <Button cName = "btn" buttonText = "View All"/>
           
        </div>
    );
}

export default BestSellers;