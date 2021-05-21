import React from 'react'
import './Login.scss';
import LoginImg from '../../../images/login.jpg';
function Login() {
    return (
        <div className="loginDiv ">
            <div className="loginBg container">
            <div className="loginsm row">
                <div className="leftLo col-md-6">
                    <img className="loginImg" src={LoginImg}/>
                </div>
                <div className="rightLo col-md-6">
                    <h2>Log In</h2>

                    <p>Welcome to Trip BD</p>


                    <form>
                        <input type="text" placeholder="username"/><br/>
                        <input type="password" placeholder="Password"/>
                        <a className="forgot" href="#">Forgot Password ?</a>
                        <a className="signInLink" href="#">Sign In</a>
                    </form>
                    or
                    <div className="googleLog">
                        <i class="fab fa-google"></i>
                        <a href="#">Sign In with google</a>
                    </div>
                    <p className="createNew">New ? <u><a href="#">Create account</a></u></p>
                </div>
            </div>
            </div>
       
        </div>
    )
}

export default Login
