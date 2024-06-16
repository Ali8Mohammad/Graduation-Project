// import React from 'react';
import './LandingPage.css';
import landingPageBackground from '../../assets/images/herolanding.jpeg';
import Wrapper from '../../Components/Wrapper/Wrapper';
import Hero from '../../Components/Hero/Hero';
import Footer from '../../Components/Footer/Footer';
import Navigation from '../../Components/Nav/Nav';
import Newsletter from '../../Components/Newsletter/Newsletter';
import ShowFlight from '../../Components/ShowFlight/ShowFlight';
import Places from '../../Components/Places/Places';
import FlightAndHotel from '../../Components/FlightAndHotel/FlightAndHotel';
import Reviewes from '../../Components/Reviewes/Reviewes';

export default function LandingPage({ title, para, navButtons, navButtonsForMobile}) {
    return (
        <section className='NM_LandingPage'>
            <Wrapper backgroundImage={landingPageBackground}>
                <Navigation buttons={navButtons} navMobile ={navButtonsForMobile}/>
                <Hero title={title} para={para} />
            </Wrapper>
            <main>
                <ShowFlight />
                <Places />
                <FlightAndHotel />
                <Reviewes />
                <Newsletter />
            </main>
            <Footer />
        </section>
    );
}

