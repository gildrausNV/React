import './App.css';
import Navbar from './components/Navbar';
import Slopes from './components/Slopes';
import FncSlope from './components/FncSlope';
import AddSlope from './components/AddSlope';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [openNum, setOpenNum] = useState(0);
  const [FncSlopes, setFncSlopes] = useState([]);
  const [slopes, setSlopes] = useState([
    { id: 1, title: "Karaman greben", difficulty: "Easy", snow: 0, open: 0 },
    { id: 2, title: "Malo jezero", difficulty: "Medium", snow: 0, open: 0 },
    { id: 3, title: "Gobelja", difficulty: "Hard", snow: 3, open: 0 },
  ]);

  function setSnow(id, snow) {
    slopes.forEach((slope) => {
      if (slope.id === id) {
        slope.snow = snow;
      }
    });
    setSlopes([...slopes]);
  }

  function refrechFnc() {
    let newSlopes = slopes.filter((slope) => slope.open > 0);
    setFncSlopes(newSlopes);
  }

  function removeSlope(title, id) {
    slopes.forEach((slope) => {
      if (slope.id === id) {
        slope.open = 0;
        setOpenNum(openNum - 1);
      }
    });
    setSlopes([...slopes]);
    refrechFnc();
  }

  function addSlope(title, id) {
    slopes.forEach((slope) => {
      if (slope.id === id) {
        if (slope.open === 0) {
          setOpenNum(openNum + 1);
        }
        slope.open = 1;
      }
    });
    setSlopes([...slopes]);
    refrechFnc();
  }

  function onAddSlope(newSlope) {
    newSlope.id = slopes.length + 1;
    setSlopes([...slopes, newSlope]);
  }

  return (
    <BrowserRouter className='App'>
      <Navbar openNum={openNum}></Navbar>
      <Routes>
        <Route path='/' element={<Slopes slopes={slopes} onAdd={addSlope} onRemove={removeSlope} onSet={setSnow} />} />
        <Route path='/FncSlope' element={<FncSlope slopes={FncSlopes} onRemove={removeSlope} />} />
        <Route path='/AddSlope' element={<AddSlope onAddSlope={onAddSlope} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
