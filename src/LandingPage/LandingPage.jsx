import React from 'react'
import './LandingPage.css'
import landingPageBackground from '../../src/assets/images/herolanding.jpeg';
import Wrapper from '../components/Wrapper/Wrapper';
import Nav from '../components/Nav/Nav';
import Hero from '../components/Hero/Hero';

export default function LandingPage({title,para}) {
    return (
        <section className='NM_LandingPage'>
            <Wrapper backgroundImage={landingPageBackground}>
                <Nav />
                <Hero title={title} para={para}/>
            </Wrapper>
        </section>
    )
}
