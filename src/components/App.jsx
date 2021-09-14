import React, { useState, useEffect } from 'react';
import Landing from './Landing.jsx';
import Contact from './Contact.jsx';
import Products from './Products.jsx';
import OnlineOrder from './OnlineOrder.jsx';
import About from './About.jsx';
import Logo from '../images/laddoosLogo1.jpg';

function App(){

    const storedValueAsNumber = Number(localStorage.getItem("count"))
    const [count, updateCount] = useState(
      Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 0
    )

    useEffect(() => {
        localStorage.setItem("count", String(count))
      }, [count])

    function showHome(){
        updateCount(0);
    }

    
    function showMenu(){
        updateCount(1);
    }

    
    function showOrder(){
        updateCount(2);
    }

    
    function showAbout(){
        updateCount(3);
    }

    
    function showContact(){
        updateCount(4);
    }

function Navbar(){

    return (<div>
        <div className = "navbar">
            <div className = "navbarContainer">
                <div className = "logoContainer">
                    <img className = "logo" src = {Logo} width = "200" height = "50"/>
                </div>
                <div className = "navItemsContainer">
                    <div className = "navItems">
                        <a onClick = {showHome} id = "home" href = "#">Home</a>
                        <a onClick = {showMenu} id = "products" href = "#">Menu</a>
                        <a onClick = {showOrder} id = "onlineOrder" href = "#">Order Online</a>
                        <a onClick = {showAbout} id = "about" href = "#">About Us</a>
                        <a onClick = {showContact} id = "contact" href = "#">Contact Us</a>
                    </div>
                </div>
                <a href = "#"><i class="fas fa-shopping-cart"></i></a>
            </div>
        </div>
        </div>
    );
}

if(count === 0){
    return (<div>
        <Navbar />
        <Landing />
        </div>);
} else if(count ===1){
    return(<Products />);
}else if(count ===2){
    return(<OnlineOrder />);
}else if(count ===3){
    return(<About />);
}else if(count ===4){
    return(<Contact />);
}


    
}

export default App;