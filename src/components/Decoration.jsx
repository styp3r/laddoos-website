import React from 'react';
import Button from './Button.jsx';
import {Link} from 'react-router-dom';

function Decoration(props){
    return (
        <div className = "decoration spacing">
            <h1 className = {"decText " + props.textBg}>{props.text}</h1>
            <Link to="/products"><Button type = "button" cName = "decBtn" buttonText = {props.buttonText}/></Link>
            <img src = {props.img} width = "100%" height = "100%"/>
        </div>
    );
}

export default Decoration;