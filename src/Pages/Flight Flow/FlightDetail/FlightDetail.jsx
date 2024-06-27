import React from 'react'
import './FlightDetail.css';
//import FlightDetailsHero from '../../Components/FlightDetailsHero/FlightDetailsHero';
import FlightDetailsHero from '../../../Components/FlightDetailsHero/FlightDetailsHero';
import EmiratesAirlinesPolicies from '../../../Components/EmiratesAirlinesPolicies/EmiratesAirlinesPolicies';
import FlightDeatailsGalary from '../../../Components/FlightDeatailsGalary/FlightDeatailsGalary';
import Footer from '../../../Components/Footer/Footer'
import CardEmirates from '../../../Components/CardEmirates/CardEmirates';

export default function FlightDetail() {
  return (
    <section className='RH_FlightDetail'>
     
      <FlightDetailsHero />
      <FlightDeatailsGalary />
      <EmiratesAirlinesPolicies />
      <CardEmirates />   
      <CardEmirates />

      <Footer />




    </section>
  )
}
