import React , {useState} from 'react';
import ReviewCard from './ReviewCard.jsx'; 
import ReviewsContent from '../reviews.js'; 

function Reviews(){

    const [count, updateCount] = useState(0);
    const [review, updateReview] = useState(ReviewsContent[count]);

    function update(state){
        var interval = setInterval(function(){
            if(count == ReviewsContent.length-1){
                updateCount(0);
            } else{
                updateCount(count + 1);
            } 
            updateReview(ReviewsContent[count]); 
            clearInterval(interval);
        }, 5000);
        if(state === 0){
            return review.img;
        } else if(state === 1){
            return review.text;
        } else{
            return review.rating;
        }
    }

    return(
        <div className = "reviewsContainer">
            <h1 className = "reviewHeader">-Customer Reviews-</h1>
            <ReviewCard img = {update(0)} text = {update(1)} rating = {update(2)}/>
        </div>
    );
}

export default Reviews;
