import React from 'react';
import './Hero.css';

export default function Hero({ title, para, head2,className }) {
  return (
    <section className={className}>
        <h2>{head2}</h2>
        <h1>{title}</h1>
        <p>{para}</p>
    </section>
  );
}

