// import React from 'react';
import './LandingPage.css';
import landingPageBackground from '../../assets/images/herolanding.jpeg';
import Wrapper from '../../Components/Wrapper/Wrapper';
import Hero from '../../Components/Hero/Hero';
import Footer from '../../Components/Footer/Footer';
import Navigation from '../../Components/Nav/Nav';
import Newsletter from '../../Components/Newsletter/Newsletter';
import PromoButtonComponent from '../../Components/ShowFlight/ShowFlight';
import Places from '../../Components/Places/Places';
import FlightAndHotel from '../../Components/FlightAndHotel/FlightAndHotel';
import Reviewes from '../../Components/Reviewes/Reviewes';


export default function LandingPage({ className, head2, title, para, navButtons, navButtonsForMobile, showTabs}) {
    return (
        <section className='NM_LandingPage'>
            <Wrapper backgroundImage={landingPageBackground}>
                <Navigation buttons={navButtons} isLandingPage={true} navMobile ={navButtonsForMobile} page="landingpage"/>
                <Hero title={title} para={para} className={className} head2={head2} />
            </Wrapper>
            <main>
            <PromoButtonComponent
                buttonText="Show Flights"
                promoText="Add Promo Code"
                showTabs={true}
            />
                <Places />
                <FlightAndHotel />
                <Reviewes />
                <Newsletter />
            </main>
            <Footer />
        </section>
    );
}

