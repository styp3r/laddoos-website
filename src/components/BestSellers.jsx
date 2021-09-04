import React from 'react';
import BuyItem from './BuyItem.jsx';

function BestSellers(){
    return (
        <div>
            <div className = "best">
                <BuyItem image = "#" title = "One" price = "Rs. 0.00"/>
                <BuyItem image = "#" title = "Two" price = "Rs. 0.00"/>
                <BuyItem image = "#" title = "Three" price = "Rs. 0.00"/>
            </div>
            <button className = "btn">View All</button>
        </div>
    );
}

export default BestSellers;