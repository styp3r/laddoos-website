import React from 'react';
import ItemBuy from './ItemBuy.jsx';
import products from '../products.js';

function OnlineOrder(){

    window.scrollTo(0, 0);

    return (
        <div className = "itemListRight">
            <ItemBuy name = {products[0].name} title = {products[0].title} img = {products[0].img} price = {products[0].price}/>
            <ItemBuy name = {products[1].name} title = {products[1].title} img = {products[1].img} price = {products[1].price}/>
            <ItemBuy name = {products[2].name} title = {products[2].title} img = {products[2].img} price = {products[2].price}/>
            <ItemBuy name = {products[3].name} title = {products[3].title} img = {products[3].img} price = {products[3].price}/>
            <ItemBuy name = {products[4].name} title = {products[4].title} img = {products[4].img} price = {products[4].price}/>
            <ItemBuy name = {products[5].name} title = {products[5].title} img = {products[5].img} price = {products[5].price}/>
        </div>);
}

export default OnlineOrder;