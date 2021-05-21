import React from 'react'
import GuidesImg from '../../images/guides.png';
import './Guides.scss'
function Guides() {
    return (
        <div className="guides container">
            <div className="row">
                <div className="leftG col-md-6">
                    <h1>A new way to explore the world</h1>
                    <p>For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect trip, but now, they can also let Lonely Planet Experiences lead the way</p>
                    <a href="#">Download</a>
                </div>
                <div className="rightG col-md-6">
                    <img src={GuidesImg} alt="explore "/>
                </div>

            </div>
        </div>
    )
}

export default Guides
