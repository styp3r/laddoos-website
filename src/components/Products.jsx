import React from 'react';
import Item from './Item.jsx';
import products from '../products.js';

function Products(){

    window.scrollTo(0, 0);

    return (
        <div className = "itemListRight">
            <Item title = {products[0].title} img = {products[0].img} price = {products[0].price}/>
            
        </div>);
}

export default Products;