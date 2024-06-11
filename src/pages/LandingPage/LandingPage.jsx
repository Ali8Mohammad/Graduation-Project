// import React from 'react';
import './LandingPage.css';
import landingPageBackground from '../../assets/images/';
import Wrapper from '../../Components/Wrapper/Wrapper';
import Nav from '../../Components/Nav/Nav';
import Hero from '../../Components/Hero/Hero';
import Footer from '../../Components/Footer/Footer';

export default function LandingPage({ title, para, navButtons }) {
    return (
        <section className='NM_LandingPage'>
            <Wrapper backgroundImage={landingPageBackground}>
                <Nav buttons={navButtons} />
                <Hero title={title} para={para} />
                <button className='subscribe'>Subscribe</button>
            </Wrapper>
            <Footer />
        </section>
    );
}

