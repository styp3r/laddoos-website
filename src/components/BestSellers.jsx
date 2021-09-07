import React from 'react';
import BuyItem from './BuyItem.jsx';

function BestSellers(){
    return (
        <div>
            <h1 className = "bestsellerHeading">Our Best Sellers</h1>
            <div className = "best">
                <BuyItem image = "https://bit.ly/3h4NOw9" title = "One"/>
                <BuyItem image = "https://bit.ly/3h4NOw9" title = "Two"/>
                <BuyItem image = "https://bit.ly/3h4NOw9" title = "Three"/>
            </div>
            <button className = "btn">View All</button>
        </div>
    );
}

export default BestSellers;