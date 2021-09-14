import React from 'react';
import Button from './Button.jsx';
import FooterContent from './FooterContent.jsx';
import {Link} from 'react-router-dom';

function Footer(){

    return (
        <footer className = "footer">
        <div className = "footerExtrusion">
            <h2>A huge variety to choose from, it will inspire you to explore and taste the divine flavours.</h2>
            <Link to="/onlineOrder"><Button type = "button" cName = "footerOrderBtn" buttonText = "Order Online"/></Link>
        </div>
        <div className = "whiteBg"></div>
            <div className = "footerContainer">
                <FooterContent cName = "fInline" class = "fas fa-map-marker-alt" title = "Office Address" text = "HEMKUND, BMP NO.10, BYRASANDRA, 14TH CROSS, NEW TIPPASANDRA POST, BEHIND MALNAD TOWERS, BANGALORE KA 560075 IN"/>
                <FooterContent cName = "fInline" class = "fas fa-phone" title = "Call Us" text = "+91 99452 58005"/>
                <FooterContent cName = "fInline" class = "fas fa-envelope" title = "Email Us" text = "laddoos@ymail.com"/>
            </div>
        </footer>
    );
}

export default Footer;