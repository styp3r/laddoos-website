import React from 'react';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import Intro from './Intro.jsx';
import Categories from './Categories.jsx';
import Decoration from './Decoration.jsx';
import BestSellers from './BestSellers.jsx';
import Offers from './Offers.jsx';
import Footer from './Footer.jsx';

function App(){
    return (
        <div>
            <Navbar />
            <Hero />
            <Intro />
            <Categories />
            <Decoration />
            <BestSellers />
            <Offers />
            <Footer />
        </div>
    );
}

export default App;