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

    var count = 0;
    const [reviewItem, updateReviewItem] = useState(ReviewsContent[count]);

    function updateImage(){
        const interval1 =  setTimeout(function(){ 
            updateReviewItem(ReviewsContent[count + 1]);
            count = count + 1; //1
            if(count == (ReviewsContent.length-1)){
                count = 0;
            }
            clearInterval(interval1);
        }, 1000);
        return reviewItem.img;
    }

    function updateText(){
        const interval2 = setInterval(function(){
            updateReviewItem(ReviewsContent[count + 1]);
            count = count + 1;
            if(count == (ReviewsContent.length-1)){
                count = 0;
            }
            clearInterval(interval2);
        }, 1000);
        return reviewItem.text;
    }

    return (
        <div>
            <Navbar />
            <Hero />
            <Intro />
            <Categories />
            <Decoration />
            <BestSellers />
            <Reviews img = {updateImage()} text = {updateText()}/>
            <Offers />
            <Footer />
        </div>
    );
}

export default App;