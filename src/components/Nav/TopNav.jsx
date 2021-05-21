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
                <a className="login" href="#">LogIn</a>
                <a className="join" href="#">Join</a>
            </div>
        </div>
    )
}

export default TopNav
