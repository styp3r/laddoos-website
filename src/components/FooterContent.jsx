import React from 'react';

function FooterContent(props){

    return(
        <div className = {props.cName}>
            <i class= {props.class}></i>
            <p>{props.title}</p>
            <p>{props.text}</p>
        </div>
    );
}

export default FooterContent;