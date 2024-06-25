import React from 'react'
import './Hero.css'
export default function Hero({head2,title,para,className}) {
  return (
    <section className={`${className}`}>
        <h2>{head2}</h2>
        <h1>{title}</h1>
        <p>{para}</p>
    </section>
  )
}
