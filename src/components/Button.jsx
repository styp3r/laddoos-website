import React from 'react';

function Button(props){

    return (
        <button className = {props.cName}>{props.buttonText}</button>
    );
}

export default Button;