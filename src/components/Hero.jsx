import React, {useState} from 'react';
import Sweet7 from '../images/sweet7.jpg';
import Sweet8 from '../images/sweet8.jpg';
import Button from './Button.jsx';
import {Link} from 'react-router-dom';



function Hero(){


    const [banner, updateBanner] = useState(Sweet7);
    const [animate, setAnimate] = useState("");


    function changeHero(){

        const interval = setInterval(function(){ 
            if(banner == Sweet7){
                setAnimate("heroImageTransition");
                updateBanner(Sweet8);
                clearInterval(interval);
            } else if(banner == Sweet8){
                setAnimate("heroImageTransition1");
                updateBanner(Sweet7);
                clearInterval(interval); 
            }
         }, 5000);
         return banner;
    }


    return (
        <div className = "heroContent">
            <div>
                <h1 className = "heroText">Taste the goodness at Laddoos.</h1>
                <Link to="/products"><Button type = "button" cName = "heroButton" buttonText = "Explore Menu"/></Link>
            </div>
            <img className = {animate} src = {changeHero()} width = "100%" height = "100%"/>
        </div>
    );
}

export default Hero;
