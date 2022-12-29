import './App.css';
import Navbar from './components/Navbar';
import Slopes from './components/Slopes';
import FncSlope from './components/FncSlope';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [slopes, setSlopes] = useState([
    {
      id: 1,
      title: "Karaman greben",
      difficulty:
        "Easy",
      snow: 0,
      open:  0,
    },
    {
      id: 2,
      title: "Malo jezero",
      difficulty:
        "Medium",
        snow: 0,
        open: 0,
    },
    {
      id: 3,
      title: "Gobelja",
      difficulty:
        "Hard",
        snow: 3,
        open: 0,
    },
  ]);
  return (<BrowserRouter className='App'>
    <Navbar ></Navbar>
    <Routes>
      <Route path='/' element={<Slopes slopes={slopes}/>}/>
      <Route path='/FncSlope' element={<FncSlope slopes={slopes}/>} />
    </Routes>
    <functioningSlopes/>
  </BrowserRouter>);
}

export default App;
