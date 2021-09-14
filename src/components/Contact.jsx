import React from 'react';
import FooterContent from './FooterContent';
import ContactForm from './ContactForm.jsx';
import Copyright from './Copyright';

function Contact(){

    return (
        <div>
            <div className = "getInTouch">
                <h3>GET IN TOUCH WITH US!</h3>
                <p>We're open for any suggestions or just to have a chat.</p>
                <FooterContent class = "fas fa-phone" text = "+91 99452 58005"/>
                <FooterContent class = "fas fa-envelope" text = "laddoos@ymail.com"/>
            </div>
            <ContactForm />
            <div className = "contactBottomContainer"><Copyright cName = "contactCopyright"/></div>
        </div>
        );
}

export default Contact;