import React from 'react'
import Navigation from '../../../Components/Nav/Nav'
import Footer from '../../../Components/Footer/Footer'
export default function FlightListing({navButtons, navButtonsForMobile}) {
  return (
    <>
    <Navigation  buttons={navButtons} navMobile ={navButtonsForMobile} isLandingPage={false}/>
    <Footer/>
    </>
  )
}
