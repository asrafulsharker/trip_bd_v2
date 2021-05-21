import React from 'react'
import './Footer.scss';
import logo from '../../images/logo.png';
// import PlayStore from '../images/playstore.png';
// import AppleStore from '../images/applestore.png';
// import Google from '../images/google.png';
// import Facebook from '../images/facebook.png';
// import Twter from '../images/twter.png';
function footer() {
    return (
        <div className="footer">
                    <div className="container">
           <div className="row">
               <div className="footerCol1 col-md-6">
                    <img className="logoF" src={logo}/>
                    <p>Plan the book your perfect trip with ex pert advice, travel trip destination information from us</p>
                    <br/>
                    <br/>
                    <p>© 2021 All right reserved</p>
               </div>
               <div className="footerCol2 col-md-2">
                   <p className="topFP">Destination</p>
                   <p>Dhaka</p>
                   <p>Munshigonj</p>
                   <p>Narayangonj</p>
                   <p>Shylet</p>
                   <p>Maymisnshing</p>
               </div>
               <div className="footerCol3 col-md-2">
                   <p className="topFP">Shop</p>
                   <p>Destination Guides</p>
                   <p>Pictorial & Gifts</p>
                   <p>Special Offer</p>
                   <p>Delivery Times</p>
                   <p>FAQs</p>
               </div>
               <div className="footerCol4 col-md-2">
                   <p className="topFP">Interests</p>
                   <p>Adventure Travel</p>
                   <p>Art And Culture</p>
                   <p>Wildlife And Nature</p>
                   <p>Family Holiday</p>
                   <p>Food And Drink</p>
               </div>
           </div>
        </div>
        <hr/>
        <div className="footerIcon ">
            <div className="row">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-youtube"></i>
            </div>
        </div>
        </div>
    )
}

export default footer;
