import React, { useEffect, useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import LandingPage from '../../Pages/LandingPage/LandingPage';
const plane='.././src/assets/images/plane.svg';
const bed='.././src/assets/images/bed.svg';
const Logo='.././src/assets/images/Logo.svg';
const blackBed = '.././src/assets/images/blackBed.svg'
const blackPlane = '.././src/assets/images/blackPlane.svg'
const blackLogo = '.././src/assets/images/blackLogo.svg'
export default function Navigation({ buttons,navMobile,page }) {
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
    <nav className={`${isScrolled ? 'scrolled' :''} ${page === "landingpage" ? "NM_NavBar" : "AM_Navbar"}`}>
      <div className={page === 'landingpage' ? 'NM_Start' : 'AM_Start'}>
        <Link to={"/flightflow"} className={page === "landingpage" ? 'NM_FindFlight' : "AM_FindFlight"} rel="noopener noreferrer">
          <img className={page === 'landingpage' ? '' : 'AM_Plane'} src={page === "landingpage" ? plane : blackPlane} alt="plane icon" /> Find Flight
        </Link>
        <Link to={"/hotelflow"} className={page === 'landingpage' ? 'NM_FindStays' : 'AM_FindStays'} rel="noopener noreferrer">
          <img className='AM_Bed' src={page === "landingpage" ? bed : blackBed} alt="bed icon" /> Find Stays
        </Link>
      </div>
      <img className={page === 'landingpage' ? 'NM_Logo' : 'AM_Logo'} src={page === "landingpage" ? Logo : blackLogo} alt="logo" />
      <div className={page === "landingpage" ? 'NM_Buttons' : "AM_Buttons"}>
        {buttons}
      </div>
       <div className= {page === "landingpage" ? '' : 'AM_Toggle d-none'}>
       <button className={`NM_ToggleButton ${isOpen ? 'open' : ''}`} onClick={toggleNav}>
           <span className={isOpen ? 'open' : ''}></span>
           <span className={isOpen ? 'open' : ''}></span>
           <span className={isOpen ? 'open' : ''}></span>
       </button>
       <ul className={`NM_End ${page === 'landingpage' ? '' : 'AM_End' } ${isOpen ? 'open' : ''}`}>
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
