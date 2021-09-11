import React from 'react';
import BuyItem from './BuyItem.jsx';
import Button from './Button.jsx';

function BestSellers(){
    return (
        <div className = "bestDiv">
            <h1 className = "bestsellerHeading">Our Best Sellers</h1>
            <div className = "bestContainer spacing">
            
                <BuyItem image = "https://bit.ly/3h4NOw9" title = "One"/>
                <BuyItem image = "https://bit.ly/3h4NOw9" title = "Two"/>
                <BuyItem image = "https://bit.ly/3h4NOw9" title = "Three"/>
            </div>
           <Button cName = "btn" buttonText = "View All"/>
        </div>
    );
}

export default BestSellers;