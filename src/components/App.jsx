import React, {useState} from 'react';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import Intro from './Intro.jsx';
import Categories from './Categories.jsx';
import Decoration from './Decoration.jsx';
import BestSellers from './BestSellers.jsx';
import Reviews from './Reviews.jsx';
import Offers from './Offers.jsx';
import Footer from './Footer.jsx';
import ReviewsContent from '../reviews.js'; 

function App(){

    const [count, updateCount] = useState(0);
    const [review, updateReview] = useState(ReviewsContent[count]);


    function updateText(){
        var interval = setInterval(function(){
            if(count == ReviewsContent.length-1){
                updateCount(0);
            } else{
                updateCount(count + 1);
            } 
            updateReview(ReviewsContent[count]); 
            clearInterval(interval);
        }, 5000);
        return review.img;
    }

    return (
        <div>
            <Navbar />
            <Hero />
            <Intro />
            <Categories />
            <Decoration />
            <BestSellers />
            <Reviews img = {updateText()} text = {review.text}/>
            <Offers />
            <Footer />
        </div>
    );
}

export default App;