import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Carrusel from './components/Carrusel';
import Cards from './components/Cards';
import Grid from './components/Grid';
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Carrusel/>
      <Cards/>
      {/* <Grid/> */}
      <Login/>
      <Signup/>
      <Footer/>
    </div>
  );
}

export default App;
