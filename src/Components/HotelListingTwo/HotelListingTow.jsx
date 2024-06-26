import React from 'react'
import './HotelListingTwo.css'
import OSLine from './../../assets/images/line.svg'
export default function HotelListingTow  ()  {
    const OSArrayReview=[
        {
        paragraf:'Near park',
        img:'../src/assets/images/Stars.svg',
       
        },
        {
         paragraf:'Near nightlife',
         img:"../src/assets/images/Stars.svg", 
    
        },
        {
        paragraf:'Near theater',
        img:"../src/assets/images/Stars.svg", 
      
        }, 
        {
        paragraf:'Clean Hotel',
        img:"../src/assets/images/Stars.svg", 
        
        }, 
        ]
  return (
    <>
    <section className='OS-Section-two'>
<div className='OS-Line_Img'><img src={OSLine} alt="Line" />
</div>
<div>
    <h2 className='OS-Text-Two'>Overview</h2>
    <p  className='OS-Paragraf-Two'>Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park Bosphorus Hotel Istanbul has risen from the ashes of the historic Park Hotel, which also served as Foreign Affairs Palace 120 years ago and is hosting its guests by assuming this hospitality mission. With its 452 luxurious rooms and suites, 8500 m2 SPA and fitness area, 18 meeting rooms including 4 dividable ones and 3 terraces with Bosphorus view, Istanbuls largest terrace with Bosphorus view (4500 m2) and latest technology infrastructure, CVK Park Bosphorus Hotel Istanbul is destined to be the popular attraction point of the city. Room and suite categories at various sizes with city and Bosphorus view, as well as 68 separate luxury suites, are offered to its special guests as a wide variety of selection.</p>
    <div className='OS-Divbig-review'>
        <div className='OS-Div-review'>
            <h2 className='OS-Title-review'>4.2</h2>
           
            <div className='OS-One-review'>
                <p className='OS-Par-review'>Very good <span className='OS-Para-review'>371 reviews</span></p>
            </div>  
        </div>
           <div className='OS-Two-review'>
           {OSArrayReview.map((item)=>{
             return<div className='OS-Twoo-review'> 
             <img className='' src={item.img} alt="reviews" />
             <p className='OS-Two-review-par'>{item.paragraf}</p>
             </div>})}
            </div>
            
      
    </div>
</div>

</section>
      
    </>
  )
}


