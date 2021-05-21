import React from 'react'
import './Explore.scss';
import ExploreImg from '../../images/explore1.png';
function Explore() {
    return (
        <div className="explore container">
            <div className="row">
            <div className="leftEx col-md-6">
                <img src={ExploreImg} alt="explore "/>
            </div>
            <div className="rightEx col-md-6">
                <h1>A new way to explore the world</h1>
                <p>For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect trip, but now, they can also let Lonely Planet Experiences lead the way</p>
                <a href="#">Learn More</a>
            </div>
            </div>
        </div>
    )
}

export default Explore
