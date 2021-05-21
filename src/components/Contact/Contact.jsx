import React from 'react'
import ContactImg from '../../images/massageC.png'
import './Contact.scss';
function Contact() {
    return (
        <div className="contact container">
            <h1>Contact</h1>
            <div className="row">
                <div className="leftCo col-md-6">
                    <img className="contactImg" src={ContactImg} alt="explore "/>
                </div>
                <div className="rightCo col-md-6">
                    <div className="wrapperC">
                        <p>Your Name</p>
                        <input type="text" placeholder="Enter your name"/>
                        <p>Email</p>
                        <input type="email" placeholder="Enter your email address"/>
                        <p>Massage</p>
                        <textarea rows="4"name="Massage" >Your massage here</textarea>
                        <br/>
                        <a href="#">Submit</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
