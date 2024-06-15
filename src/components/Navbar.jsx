import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ openNum }) {
  return (
    <div className="navBar">
      <Link to='/'><h1>Serbia Slopes</h1></Link>
      <Link to='/openSlopes' className="ski-items">Open slopes
        <p className='ski-num'>{openNum}</p>
      </Link>
      <Link to='/addSlope' className="ski-items">Add Slope</Link>
    </div>
  );
}

export default Navbar;
