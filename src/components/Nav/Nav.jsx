import React from 'react';
import './Nav.css';
export default function Nav() {
  return (
    <nav className='NM_NavBar'>
        <div className='NM_Start'>
            <a className='NM_FindFlight' href="#" target="_blank" rel="noopener noreferrer">
            <img  src="./src/assets/images/plane.svg" alt="plane icon" /> Find Flight
            </a>
            <a  className='NM_FindStays' href="#" target="_blank" rel="noopener noreferrer">
            <img src="./src/assets/images/bed.svg" alt="bed icon" /> Find Stays
            </a>
        </div>
        <img className='NM_Logo' src="./src/assets/images/Logo.svg" alt="logo" />
        <div className='NM_Buttons'>
            <button className='NM_Login'>Login</button>
            <button className='NM_Signup'>Sign up</button>
        </div>

    </nav>
  )
}
