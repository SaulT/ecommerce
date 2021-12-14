import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Grid from './components/Grid';
import Product from './components/Product';
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product/:id" element={<Product/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>

      {/* <Grid/> */}
      {/* <Login/>
      <Signup/> */}
      <Footer/>
    </div>
  );
}

export default App;
