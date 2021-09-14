import React from 'react';
import Button from './Button.jsx';
import {Link} from 'react-router-dom';

function Intro(){
    return (
        <div className = "introContainer">
            <div className = "intro">
                <h1 className = "redHeading thin">sweets</h1>
                <h1 className = "redHeading bold">FOR EVERY TASTE</h1>
                <p>Welcome to one of the sweetest sweet stores all over Bengaluru! We launched our business back in 2010, and we grew from one local shop to 6+ outlets, which also delivers its products all over the city. We can promise you, that regardless of your age, you will enjoy being at our outlets. During last decade, we’ve been cherishing the sweet business, enlarging the selection, training our staff and widening our customer audience.</p>
                <Link to="/onlineOrder"><Button type = "button" cName = "shopNow" buttonText = "Shop Now"/></Link>
            </div>
        </div>
    );
}

export default Intro;