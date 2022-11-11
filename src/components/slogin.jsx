import './loginui.css';
import React, { Component } from 'react';
import profile from './person.png';
class SignUp extends Component{
  render(){
  return (
    <div className="main" style={{fontFamily: 'Shalimar cursive'}}>
     <div className="sub-main" style={{height: 800}}>
       <div>
         <div className="imgs" >
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Sign up</h1>   
           <div>
             <input type="text" placeholder="Full Name" className="name"/>
           </div> 
           <br/>      
           <div>
             <input type="text" placeholder="Username" className="name"/>
           </div>
           <br/>
           <div>
             <input type="text" placeholder="Contact number" className="name"/>
           </div>
           <br/>
           <div>
             <input type="text" placeholder="Email ID" className="name"/>
           </div>
           <br/>
           <div >
             <input type="password" placeholder="Password" className="name"/>
           </div>
          <div className="login-button">
          <button style={{width: 300}}>Sign up</button>
          <br/>
          <br/>
          
          <a href="http://localhost:3000/Login">Login</a>
          </div>
         </div>
       </div>
       

     </div>
    </div>
  );
  }
}
export default SignUp;