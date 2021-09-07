import React from 'react';
import Sweet10 from '../images/sweet10.jpg';

function Decoration(){
    return (
        <div className = "decoration spacing">
            <h1 className = "decText">The tradition gets alive at Laddoos, the choice is difficult to make, indulge and intoxicate your senses with every bite.</h1>
            <button className = "decBtn">Explore Menu</button>
            <img src = {Sweet10} width = "100%" height = "100%"/>
        </div>
    );
}

export default Decoration;