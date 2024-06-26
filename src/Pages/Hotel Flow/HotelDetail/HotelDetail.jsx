import React from 'react'
import HotelListingOne from '../../../Components/HotelListingOne/HotelListingOne'
import HotelListingTow from '../../../Components/HotelListingTwo/HotelListingTow'
import HotelListingThree from '../../../Components/HotelListingThree/HotelListingThree'
import HotalMap from '../../../Components/HotalMap/HotalMap'
import Amenities from '../../../Components/Amenities/Amenities'
import Reviews from '../../../Components/Reviews/Reviews'

export default function HotelDetail() {
  return (
    <div>
      <HotelListingOne/>
      < HotelListingTow/>
      <HotelListingThree/>
      <HotalMap/>
      <Amenities/>
      <Reviews/>
    </div>

  )
}
