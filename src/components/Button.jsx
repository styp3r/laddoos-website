import React from 'react';

function Button(props){

    return (
        <button type = {props.type} className = {props.cName}>{props.buttonText}</button>
    );
}

export default Button;