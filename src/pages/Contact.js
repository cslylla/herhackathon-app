import React from 'react';
import '../Contact.css';
import insta from "../images/insta.png"
import email from "../images/email.png"
import linkedin from "../images/linkedin.png"
import phone from "../images/phone.png"
import address from "../images/address.png"
import contactus from "../images/contactus.svg"




export default function Contact(){
    return(
    <div className="Contact text-center">
        <h1>Contact</h1>
        <h2>Let`s get in touch!</h2>
        <p>For further information enter your E-mail Address below</p>
        <div className="container mt-0 mb-0">
    
        <form>
            <input type="email" placeholder="Enter your email address" autoFocus={true} autoComplete="false"/>
            <input type="submit" value="Sign me up" className="button"/> 
        </form> 

        </div>
        <div className= "container d-flex">

        <div className= "contact"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" title="Go to Instagram"><img src={insta} alt="Instagram logo" className="contact-logo"/></a></div>
        <div className= "contact"><a href="mailto:info@loanbuddy.com" target="_blank" rel="noreferrer" title="Send us an email"><img src={email} alt="email logo" className="contact-logo"/></a></div>
        <div className= "contact"><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" title="Send us an email"><img src={linkedin} alt="LinkedIn logo" className="contact-logo"/></a></div>
        </div>
        <div className= "container d-flex">
        <div className= "contact">
        <ul>
        <li className="text-center"><img src={address} alt="Address symbol" className="contact-symbol"/></li>
        <li>LoanBuddy</li>
        <li>Hauptstraße 133</li>
        <li>10827 Berlin</li>
        <li>Germany</li>
        </ul>
        </div>
        <div className= "contact">
        <ul>
        <li className="text-center"><img src={phone} alt="Phone symbol" className="contact-symbol"/></li>
        <li>+ 49 12 234 56 78</li>
        </ul>
        </div>
        </div>
        <img src={contactus} alt="Contact drawing" className="contact-us"/>
    </div>
    );
}