import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import crusty from './crustys.png'
import indianDeli from './id.png'
import './index.css';
const Intro=()=>{
    return (
        
        <div>
           <a style={{fontFamily: 'Shalimar cursive', fontSize:30, paddingLeft:80}} href="http://localhost:3000/Login">Login </a>
            <a style={{fontFamily: 'Shalimar cursive', fontSize:30, paddingLeft:80}} href="http://localhost:3000/SignUp">SignUp </a>
        </div>
    )
}
export default Intro