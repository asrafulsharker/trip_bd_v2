import React from 'react'
import './Login.scss';

import LoginImg from '../../../images/login.jpg';
const Login=()=> {



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
                        <input 
                        type="text" 
                        placeholder="username"
                        placeholder="Email"
                        autoFocus
                        required
                        />
                        <p className="errorMsg"></p>
                        
                        <input 
                        type="password" 
                        required
                        placeholder="Password"
                        />
                        <p className="errorMsg"></p>
                        <a className="forgot" href="#">Forgot Password ?</a>
                        <a className="signInLink" href="#">Sign In</a>
                        <div className="btnContainer">
                        </div>
                    </form>
                    or
                    <div className="googleLog">
                        <i class="fab fa-google"></i>
                        <a href="#">Sign In with google</a>
                    </div>
                    <p className="createNew">New ? <u><a href="/join">Create account</a></u></p>
                </div>
            </div>
            </div>
       
        </div>
    )
}

export default Login
