import React from 'react'
import './Favorites.css'
import Navigation from '../../../Components/Nav/Nav'
import Favoriteshead from '../../../Components/Favorites-head/Favoriteshead'
import Favoritesmain from '../../../Components/Favorites-main/Favoritesmain'
import Footer from '../../../Components/Footer/Footer'
import Newsletter from '../../../Components/Newsletter/Newsletter'
export default function Favorites() {
  return (
    <section className='MH-favorites'>
      <Navigation/>
      <div className="MH-favorites-content">
      <Favoriteshead/>
      <Favoritesmain/>
      </div>
      {/* <Newsletter/> */}
      <Footer/>
    </section>
  )
}
