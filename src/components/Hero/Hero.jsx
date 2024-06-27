import React from 'react';
import './Hero.css';

export default function Hero({ title, para }) {
  return (
    <section className='NM_Hero'>
        <h2 className='NM_cssanimation NM_sequence NM_leBlurInTop'>Helping Others</h2>
        <h1 className='NM_cssanimation NM_sequence NM_leBlurInRight'>
        {title.split("").map((char, index) => (
            <span key={index}>{char}</span> ))}
        </h1>
        <p className='NM_cssanimation NM_sequence NM_leBlurInBottom'>
          {para}
          </p>
    </section>
  );
}

