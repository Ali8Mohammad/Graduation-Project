import React from 'react'
import './Hero.css'
export default function Hero({title,para}) {
  return (
    <section className='NM_Hero'>
        <h2>Helping Others</h2>
        <h1>{title}</h1>
        <p>{para}</p>
    </section>
  )
}
