import React from 'react'
import"./HeroAccount.css"
import client from"./../../assets/images/profile-photo.jpg"
import upload from "./../../assets/images/upload.svg"
import pen from "./../../assets/images/pen.svg"

export default function HeroAccount() {
  return (
    <>
    <section className='MS-heroAccount'>
        <div className='MS-heroAccountImg'>
            <button><img src={upload} alt="upload" />Upload new cover</button>
        </div>
        <div className='MS-profile'>
            <img src={client} alt="client" className='MS-client'/>
            <div className='MS-icon'><img src={pen} alt="pen" /></div>
    </div>
    <div className='MS-profile-text'>
    <p className='MS-name'>John Doe.</p>
    <p className='MS-email'>john.doe@gmail.com</p>
    </div>
    </section>
    </>
  )
}
