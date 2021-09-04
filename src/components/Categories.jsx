import React from 'react';
import CatItem from './CatItem.jsx';

function Categories(){
    return(
        <div className = "categoriesContainer">
            <CatItem  catName = "One" catImg = "#"/>
            <CatItem  catName = "Two" catImg = "#"/>
            <CatItem  catName = "Three" catImg = "#"/>
        </div>
    );
}

export default Categories;