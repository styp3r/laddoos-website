import React from 'react';
import CatItem from './CatItem.jsx';

function Categories(){
    return(
        <div className = "categoriesContainer">
            <CatItem  catName = "One" catImg = "https://bit.ly/3h4NOw9" />
            <CatItem  catName = "Two" catImg = "https://bit.ly/3h4NOw9" />
            <CatItem  catName = "Three" catImg = "https://bit.ly/3h4NOw9" />
        </div>
    );
}

export default Categories;