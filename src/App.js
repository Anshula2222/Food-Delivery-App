import React from 'react';
import Crusty from './components/crustys';
import IndianDeli from './components/indianDeli';
import Login from './components/login';
import Home from './components/Home';
import SignUp from './components/slogin';
import Intro from './components/into';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Redirect,} from "react-router-dom";
import './App.css';
function App() {
  return (
    <div>
    <Router>
        <Routes>
        <Route exact path="/" element={<Intro/>} />
        <Route exact path="/Home" element={<Home/>} />
        <Route path="/Crusty" element={<Crusty/>} />
        <Route path="/IndianDeli" element={<IndianDeli/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        </Routes>
      </Router>
      </div>
  )
}

export default App;
