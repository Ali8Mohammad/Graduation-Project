import React from 'react'
import './HotelListingOne.css'
import OsLocation from './../../assets/images/Location.svg'
import OsHotelListing1 from './../../assets/images/Hotel-listing-1.svg'
export default function HotelListingOne () {
   const OSdata2=[
        {
        paragraf:'Turkey',
        img:'../src/assets/images/chevron_forward.svg',
        class:"OsColor Os-Size-p"
        },
        {
         paragraf:'Istanbul',
         img:"../src/assets/images/chevron_forward.svg", 
         class:"OsColor Os-Size-p"
        }, 
        ]
       const OSImg=[
        { img:'../src/assets/images/Star.svg'},
        { img:'../src/assets/images/Star.svg'},
        { img:'../src/assets/images/Star.svg'},
        { img:'../src/assets/images/Star.svg'}, 
        { img:'../src/assets/images/Star.svg'}
    ]
    const OSbutton=[
    {
        content:'../src/assets/images/heart.svg',
        class:'OS-btn-icon'
    },
    {
        content:'../src/assets/images/Share.svg',
        class:'OS-btn-icon'
    },
   ]
   const OSImgHotel1=[
    { img:'../src/assets/images/Room-1.png'},
    { img:'../src/assets/images/Room-2.png'}
  ]
const OSImgHotel2=[
   
    { img:'../src/assets/images/Room-3.png',
      class:'OS-Room-Img'},
    { img:'../src/assets/images/Room-4.png',
      class:'OS-Room-Img OS-room-img'}
  ]
 

  return (
    <>
    <section className='OS-Listing_section'>
        <div className='OS-Listing-one OS-Listing-onne'>
        {OSdata2.map((item)=>{
        return<div className='OS-Listing-one'> 
        <p className={item.class}>{item.paragraf}</p>
       <img className='Os-img-chevron' src={item.img} alt="travel" />
        </div>})}
        <p className='Os-Size-p'>CVK Park Bosphorus Hotel Istanbul</p>
        </div>
        <div className='OS-Div-One'>
        <div>
            <div className='OS-Listing-Two'>
            <p className='Os-Size-pp'>CVK Park Bosphorus Hotel Istanbul</p>
            <ul className='OS-Star-List'>
             <li className='OS-Star-Item'>
            {OSImg.map((item)=>{
            return<img className='OS-Star-img' src={item.img} alt="travel" />})}
             </li>
            </ul>
            <p className='Os-Size-ppp'>5 Star Hotel</p>
            </div>
            <div className='OS-Listing-one'>
                <img className='OS-Location-img' src={OsLocation} alt="" />
                <p className='Os-Size-p OS-Size-Co'>Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
            </div>
            <div className='OS-Listing-Two OS-Listing-size '>
                <button className='OS-btn-Listing'>4.2</button>
                <p className='OS-Paragraf-p OS-Paragraf-W'> <span className='OS-Paragraf-p OS-Paragraf-Span'>Very Good</span> 371 reviews</p>
            </div>
         </div>
         <div className='OS-Div_Right'>
           <div className='OS-Text-div'> <h6 className='OS-Text-style'>240$ <span className='OS-TextSpan-style'>/night</span></h6></div>
            <div className='OS_div-btn'>
            {OSbutton.map((item)=>{
        return <button className={item.class}><img src={item.content} alt="" /></button>
      })}
      <button className='OS-Btn-Book OS-btn-icon'>Book now</button>
            </div>
         </div>
        </div>
       <div className='OS-Hotel_one'>
            <div className='OS-Hotel_img1' ><img src={OsHotelListing1} alt="" /></div>
            <div className='OS-Div-Room'>
                <div  className='OS-Div-Room1'>
                {OSImgHotel1.map((item)=>{
        return <img className='OS-Room-Img' src={item.img} alt="Room" />
      })}
                </div>
                <div className=' OS-Div-Room1  OS_div_Room1'>
                {OSImgHotel2.map((item)=>{
        return <img className={item.class} src={item.img} alt="Room" />
      })}
      <button className='OS-Btn-Book OS-Btn-Photo'> View all photos</button>
                </div>
         
            </div>
        </div>
    </section>
      
    </>
  )
}


