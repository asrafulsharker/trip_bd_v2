import React from 'react';
import JoinImg from '../../../images/join.jpg';
import './Join.scss'
function Join() {
    return (
        <div className="loginDiv ">
        <div className="loginBg container">
        <div className="loginsm row">
        <div className="rightLo col-md-6">
                <h2>Join</h2>

                <p>Welcome to Trip BD</p>


                <form>
                    <input stype="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/><br/>
                    <input type="password" placeholder="Password"/>
                    <a className="signInLink" href="#">Sign Up</a>
                </form>
                or
                <div className="googleLog">
                    <i class="fab fa-google"></i>
                    <a href="#">Sign Up with google</a>
                </div>
                <p className="createNew">Have account ? <u><a href="/login">Sign In</a></u></p>
            </div>
            <div className="leftLo col-md-6">
                <img className="loginImg" src={JoinImg}/>
            </div>

        </div>
        </div>
   
    </div>
    )
}

export default Join
