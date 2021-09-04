import React from 'react';
import OfferItem from './OfferItem.jsx';

function Offers(){
    return(
        <div>
            <div className = "offers">
                <OfferItem />
                <OfferItem />
            </div>
        </div>
    );
}

export default Offers;