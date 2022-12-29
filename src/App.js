import './App.css';
import Navbar from './components/Navbar';
import Slopes from './components/Slopes';
import FncSlope from './components/FncSlope';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (<BrowserRouter className='App'>
    <Navbar ></Navbar>
    <Routes>
      <Route path='/' element={<Slopes />}/>
      <Route path='/FncSlope' element={<FncSlope />} />
    </Routes>
    <functioningSlopes/>
  </BrowserRouter>);
}

export default App;
