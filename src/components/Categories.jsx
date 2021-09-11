import React from 'react';
import CatItem from './CatItem.jsx';
import Sweet2 from '../images/sweet2.jpg';
import Chaats from '../images/chaats.jpg';
import Parathas from '../images/parathas.jpg';
import MandalaRight from '../images/mandalaRight.png';

function Categories(){
    return(
        <div className = "catDiv">
            <img className = "mandalaRight" src = {MandalaRight} width = "350" height = "350"/>
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