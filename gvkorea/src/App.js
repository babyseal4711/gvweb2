import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/products' element = {<Products/>}/>
        <Route path='/aboutus' element = {<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;