import React from 'react';
import Logo from '../images/laddoosLogo1.jpg';

function Navbar(){
    return (<div>
        <div className = "navbar">
            <div className = "navbarContainer">
                <div className = "logoContainer">
                    <img className = "logo" src = {Logo} width = "200" height = "50"/>
                </div>
                <div className = "navItemsContainer">
                    <div className = "navItems">
                        <a id = "home" href = "#">Home</a>
                        <a id = "products" href = "#">Menu</a>
                        <a id = "products" href = "#">Order Online</a>
                        <a id = "about" href = "#">About Us</a>
                        <a id = "contact" href = "#">Contact Us</a>
                    </div>
                </div>
                <a href = "#"><i class="fas fa-shopping-cart"></i></a>
            </div>
        </div>
        </div>
    );
}

export default Navbar;