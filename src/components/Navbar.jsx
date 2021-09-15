import React from 'react';
import Logo from '../images/laddoosLogo1.jpg';
import { Link } from 'react-router-dom';

function Navbar(){

    return (<div>
        <div className = "navbar">
            <div className = "navbarContainer">
                <div className = "logoContainer">
                    <img className = "logo" src = {Logo} width = "200" height = "50"/>
                </div>
                <div className = "navItemsContainer">
                    <div className = "navItems">
                        <Link id = "home" to="/">Home</Link>
                        <Link id = "products" to="/products">Menu</Link>
                        <Link id = "onlineOrder" to="/onlineOrder">Order Online</Link>
                        <Link id = "about" to="/about">About Us</Link>
                        <Link id = "contact" to="/contact">Contact Us</Link>
                    </div>
                </div>
                <Link id = "cart" to="/cart"><i class="fas fa-shopping-cart"></i></Link>
            </div>
        </div>
        </div>
    );
}

export default Navbar;