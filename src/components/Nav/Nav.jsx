import React, { useEffect, useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
const plane='.././src/assets/images/plane.svg';
const bed='.././src/assets/images/bed.svg';
const Logo='.././src/assets/images/Logo.svg';

export default function Navigation({ buttons,navMobile }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled,setIsScrolled] =useState(false);
  const toggleNav = () => {
      setIsOpen(!isOpen);
  }
  useEffect(()=>{
    const handleScroll =()=>{
      if(window.scrollY>50){
        setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
    };
    window.addEventListener('scroll',handleScroll);
      return ()=>{
        window.removeEventListener('scroll',handleScroll);
      };
  },[]);
  return (
    <nav className={`NM_NavBar ${isScrolled ? 'scrolled' :''}`}>
      <div className='NM_Start'>
        <Link to={"flightflow"} className='NM_FindFlight' rel="noopener noreferrer">
          <img src={plane} alt="plane icon" /> Find Flight
        </Link>
        <Link to={"hotelflow"} className='NM_FindStays' rel="noopener noreferrer">
          <img src={bed} alt="bed icon" /> Find Stays
        </Link>
      </div>
      <img className='NM_Logo' src={Logo} alt="logo" />
      <div className='NM_Buttons'>
        {buttons}
      </div>
       <div>
       <button className={`NM_ToggleButton ${isOpen ? 'open' : ''}`} onClick={toggleNav}>
           <span className={isOpen ? 'open' : ''}></span>
           <span className={isOpen ? 'open' : ''}></span>
           <span className={isOpen ? 'open' : ''}></span>
       </button>
       <ul className={`NM_End ${isOpen ? 'open' : ''}`}>
          <li>
             <Link className='NM_Link' to={"flightflow"} rel="noopener noreferrer"> Find Flight
           </Link>
          </li>
          <li>
             <Link className='NM_Link' to={"hotelflow"}  rel="noopener noreferrer"> Find Stays
           </Link>
          </li>
          {navMobile}
       </ul>
      </div>
    </nav>
  );
}
