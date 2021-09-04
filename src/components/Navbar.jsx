import React from 'react';

function Navbar(){
    return (
        <div className = "navbar">
            <div className = "navbarContainer">
                <div className = "logoContainer">
                    <img className = "logo" src = "#"/>
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
    );
}

export default Navbar;