// import React from 'react';
import './LandingPage.css';
import landingPageBackground from '../../assets/images/herolanding.jpeg';
import Wrapper from '../../Components/Wrapper/Wrapper';
import Navigation from '../../Components/Nav/Nav';
import Hero from '../../Components/Hero/Hero';
import Footer from '../../Components/Footer/Footer';

export default function LandingPage({ title, para, navButtons, navButtonsForMobile }) {
    return (
        <section className='NM_LandingPage'>
            <Wrapper backgroundImage={landingPageBackground}>
                <Navigation page='landingPage' buttons={navButtons} navMobile ={navButtonsForMobile}/>
                <Hero title={title} para={para} />
            </Wrapper>
            <Footer />
        </section>
    );
}

