import React from 'react';
import Logo from '../images/laddoosLogo1.jpg';

function Navbar(){
    return (<div>
        <div className = "order">ORDER ONLINE OR CALL US +91 99452 58005
        </div>
        <div className = "navbar">
            <div className = "navbarContainer">
                <div className = "logoContainer">
                    <img className = "logo" src = {Logo} width = "200" height = "50"/>
                </div>
                <div className = "navItemsContainer">
                    <div className = "navItems">
                        <a id = "home" href = "#">Home</a>
                        <a id = "products" href = "#">Products</a>
                        <a id = "about" href = "#">About Us</a>
                        <a id = "contact" href = "#">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Navbar;