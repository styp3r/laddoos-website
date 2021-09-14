import React from 'react';
import Button from './Button.jsx';

function ContactForm(){
    return(
        <div className = "contactFormContainer">
            <div className = "contactFormContents">
                <h3>SEND US A MESSAGE</h3>
                <form className = "form">
                    <input className = "name" placeholder = "Full Name" type = "text" spellcheck = "false"/>
                    <input className = "email" placeholder = "Email" type = "email" spellcheck = "false"/>
                    <textarea id = "message" placeholder = "Your Message" type = "text" spellcheck = "false"/>
                    <Button type = "submit" cName = "submitBtn" buttonText = "SUBMIT"/>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;