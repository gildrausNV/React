import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({openNum}) {
    //const openNum=1;
  return (
    <div className="navBar">
        <Link to='/'><h1>Ski slopes Serbia</h1></Link>
        <Link to='/FncSlope' className="ski-items">Open slopes
            <p className='ski-num'>{openNum}</p>
        </Link>
    </div>
  )
}

export default Navbar