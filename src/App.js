import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Carrusel from './components/Carrusel';
import Cards from './components/Cards';
import Grid from './components/Grid';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Carrusel/>
      <Cards/>
      {/* <Grid/> */}
      <Footer/>
    </div>
  );
}

export default App;
