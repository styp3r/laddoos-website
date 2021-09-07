import React from 'react';
import SweetOffer from '../images/sweetOffer1.jpg';

function OfferItem(){
    return (
        <div className = "offerItemContainer">
            <div className = "offerItem">
            <img src = {SweetOffer} width = "100%" height= "100%"/>
            </div>
        </div>
    );
}

export default OfferItem;