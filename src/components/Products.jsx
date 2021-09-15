import React from 'react';
import Item from './Item.jsx';
import MenuProducts from '../MenuProducts.js';

function Products(){

    window.scrollTo(0, 0);

    return (
        <div className = "itemListRight">
            <Item title = {MenuProducts[0].title} img = {MenuProducts[0].img} />
            <Item title = {MenuProducts[1].title} img = {MenuProducts[1].img} />
            <Item title = {MenuProducts[2].title} img = {MenuProducts[2].img} />
            <Item title = {MenuProducts[0].title} img = {MenuProducts[0].img} />
            <Item title = {MenuProducts[1].title} img = {MenuProducts[1].img} />
            <Item title = {MenuProducts[2].title} img = {MenuProducts[2].img} />
        </div>);
}

export default Products;