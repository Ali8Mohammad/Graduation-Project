import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

export default function Nav({ buttons }) {
  return (
    <nav className='NM_NavBar'>
      <div className='NM_Start'>
        <Link to={"/flightflow"} className='NM_FindFlight' rel="noopener noreferrer">
          <img src="./src/assets/images/plane.svg" alt="plane icon" /> Find Flight
        </Link>
        <Link to={"#"} className='NM_FindStays' rel="noopener noreferrer">
          <img src="./src/assets/images/bed.svg" alt="bed icon" /> Find Stays
        </Link>
      </div>
      <img className='NM_Logo' src="./src/assets/images/Logo.svg" alt="logo" />
      <div className='NM_Buttons'>
        {buttons}
      </div>
    </nav>
  );
}

