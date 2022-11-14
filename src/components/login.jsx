import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './loginui.css';
import hero from './hero-1.jpg'

class Login extends Component{
  render(){
  return (
    <div className='root'>
      <div className='hero'>
        <div classname='hero-image'>
          <img src={hero} alt="hero" className='hero-image'/>
        </div>
      </div>
      <div className="main">
        <div className='login-container'>
          <h1>Welcome!</h1>
          <div className='linkup-button'>
            <button>Sign in with Google</button>
            <h5>Or</h5>
          </div>
          <div className='form-inputs'>
            <label>Username</label>
            <input type="text" placeholder="" value="" name="username"/>
          </div>
          <div className='form-inputs'>
            <label>Password</label>
            <h6 className='forgot-pass'><a href="http://localhost:3000/SignUp">Forgot Password?</a></h6>
            <input type="password" placeholder="" value="" name="password"/>
          </div>
          <div className='login-button'>
            <button>Login</button>
            <h6 className='sign-up-prompt'>Haven't jiffed before? <a href="http://localhost:3000/SignUp" className='sign-up-anchor'>Sign up now</a></h6>
          </div>
        </div>
      </div>
    </div>
  )
  }
}

export default Login;
