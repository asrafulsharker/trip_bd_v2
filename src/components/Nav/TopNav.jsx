import React from 'react';
import './TopNav.scss';
import Logo from '../../images/logo.png'
function TopNav() {
    return (
        <div className=" TopNav">
            <div className="leftTN">
                <img className="logo" src={Logo}/>
            </div>
            <div className="rightTN">
                <a className="login" href="/login">LogIn</a>
                <a className="join" href="/join">Join</a>
            </div>
        </div>
    )
}

export default TopNav
