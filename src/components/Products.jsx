import React from 'react';
import Item from './Item.jsx';
import MenuProducts from '../MenuProducts.js';
import {Link} from 'react-router-dom';

function Products(){

    window.scrollTo(0, 0);

    return (
        <div className = "itemListRight">
            <Link id = "allProducts" to="/onlineOrder"><Item title = {MenuProducts[0].title} img = {MenuProducts[0].img} /></Link>
            <Item title = {MenuProducts[1].title} img = {MenuProducts[1].img} />
            <Item title = {MenuProducts[2].title} img = {MenuProducts[2].img} />
            <Item title = {MenuProducts[3].title} img = {MenuProducts[3].img} />
            <Item title = {MenuProducts[4].title} img = {MenuProducts[4].img} />
            <Item title = {MenuProducts[5].title} img = {MenuProducts[5].img} />
            <Item title = {MenuProducts[6].title} img = {MenuProducts[6].img} />
        </div>);
}

export default Products;