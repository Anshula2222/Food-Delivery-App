import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './loginui.css';
import email from './email.png';
import profile from './person.png';
import pass from './lock.png';
class Login extends Component{
  render(){
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>
           </div>
         </div>
         <div style={{fontFamily: 'Shalimar cursive'}}>
           <h1>Login Page</h1>
           <div>
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="Username" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="Password" className="name"/>
           </div>
          <div className="login-button">
          <button style={{width: 380}}>Login</button>
          </div>
            <p className="link">
              <br/> <a href="http://localhost:3000/SignUp">Sign Up</a>
            </p>
         </div>
       </div>
     </div>
     </div>
  )
  }
}

export default Login;