// import React from 'react';
import './LandingPage.css';
import landingPageBackground from '../../assets/images/herolanding.jpeg';
import Wrapper from '../../Components/Wrapper/Wrapper';
import Nav from '../../Components/Nav/Nav';
import Hero from '../../Components/Hero/Hero';
import Footer from '../../Components/Footer/Footer';

export default function LandingPage({ title, para, navButtons }) {
    return (
        <section className='NM_LandingPage'>
            <Wrapper backgroundImage={landingPageBackground}>
                <Nav page='landingPage'/>
                <Hero title={title} para={para} />
            </Wrapper>
            <Footer />
        </section>
    );
}

