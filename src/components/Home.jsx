import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import crusty from './crustys.png'
import indianDeli from './id.png'
import './index.css';
const Home=()=>{
    return (
        
        <div>
            
            <a href="http://localhost:3000/Crusty">
            <img src={crusty} height="300px"></img></a>
            <br/>
            <a href="http://localhost:3000/IndianDeli">
            <img src={indianDeli} height="300px"></img></a>
            <br/> 
            <a style={{fontFamily: 'Shalimar cursive', fontSize:30, paddingLeft:80}} href="http://localhost:3000/Login">Login </a>
            <a style={{fontFamily: 'Shalimar cursive', fontSize:30, paddingLeft:80}} href="http://localhost:3000/SignUp">SignUp </a>
        </div>
    )
}
export default Home