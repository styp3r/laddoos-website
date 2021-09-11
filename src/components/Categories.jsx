import React from 'react';
import CatItem from './CatItem.jsx';
import Sweet2 from '../images/sweet2.jpg';
import Chaats from '../images/chaats.jpg';
import Parathas from '../images/parathas.jpg';

function Categories(){
    return(
        <div className = "catDiv">
            <h1 className = "categoriesHeader">Categories</h1>
            <div className = "categoriesContainer spacing">
                <CatItem  catName = "SWEETS" catImg = {Sweet2} />
                <CatItem  catName = "CHAATS" catImg = {Chaats} />
                <CatItem  catName = "PARATHAS" catImg = {Parathas} />
            </div>
        </div>
    );
}

export default Categories;