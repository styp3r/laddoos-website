import React from 'react';
import Hero from './Hero.jsx';
import Intro from './Intro.jsx';
import Categories from './Categories.jsx';
import Decoration from './Decoration.jsx';
import BestSellers from './BestSellers.jsx';
import Reviews from './Reviews.jsx';
import Offers from './Offers.jsx';
import Footer from './Footer.jsx';
import Sweet11 from '../images/sweet11.jpg';
import Chaat1 from '../images/chaat1.jpg';
import Copyright from './Copyright.jsx';



function Landing(){
    return(
        <div>
            <Hero />
            <Intro />
            <Categories />
            <Decoration buttonText = "Explore Menu" text = "The tradition gets alive at Laddoos, the choice is difficult to make, indulge and intoxicate your senses with every bite." img = {Sweet11}/>
            <BestSellers />
            <Decoration textBg = "textBg" buttonText = "Explore Collection" text = "Housing a wide variety of Indian Chaats, we at Laddoos never fail to make your taste buds tingle." img = {Chaat1}/>
            <Reviews />
            <Offers />
            <Footer />
            <Copyright />
        </div>
    );
}

export default Landing;