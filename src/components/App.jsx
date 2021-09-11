import React from 'react';
import Navbar from './Navbar.jsx';
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

function App(){

   return (
        <div>
            <Navbar />
            <Hero />
            <Intro />
            <Categories />
            <Decoration img = {Sweet11}/>
            <BestSellers />
            <Decoration img = {Chaat1}/>
            <Reviews />
            <Offers />
            <Footer />
        </div>
    );
}

export default App;