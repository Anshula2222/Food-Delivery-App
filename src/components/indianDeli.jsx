import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
class IndianDeli extends Component{
    render(){
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded" style={{backgroundColor:"red"}}>
                <div className="container-fluid2">
                    <a className="navbar-brand" href="#" style={{fontSize:80,fontFamily:"Shalimar"}}>IndianDeli</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item" style={{fontSize:60,fontFamily:"Shalimar",paddingLeft:950,color:"yellow"}}>
                        <a className="nav-link" href="http://localhost:3000">Home</a>
                        </li>
                        <li className="nav-item" style={{fontSize:60,fontFamily:"Shalimar"}}>
                        <a className="nav-link" href="#">Cart</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        </div>
    )
    }
}

export default IndianDeli