import React from 'react';
import './LandingPage.css';
import landingPageBackground from '../../assets/images/herolanding.jpeg';
import Wrapper from '../../components/Wrapper/Wrapper';
import Nav from '../../components/Nav/Nav';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';

export default function LandingPage({ title, para, navButtons }) {
    return (
        <section className='NM_LandingPage'>
            <Wrapper backgroundImage={landingPageBackground}>
                <Nav buttons={navButtons} />
                <Hero title={title} para={para} />
            </Wrapper>
            <Footer />
        </section>
    );
}

