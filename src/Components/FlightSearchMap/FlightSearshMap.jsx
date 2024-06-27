import React from 'react'
import ImgMap  from './../../assets/images/Group.png'
import ImgOneFrame  from './../../assets/images/Place-1.png'
import ImgTwoFrame  from './../../assets/images/Place-2.png'
import ImgThreeFrame  from './../../assets/images/Place-3.png'
import ImgFourFrame  from './../../assets/images/Place-4.png'
import ImgFiveFrame  from './../../assets/images/Place-5.png'
import ImgArrow  from './../../assets/images/arrow.png'
import ImgArrow1  from './../../assets/images/arrow1.png'
import './FlightSearchMap.css'
export default function FlightSearshMap()   {
  return (
    <section className='OS_Flight_Map'>
   <div className='OS_one_Title'>
            <div className='OS_Title_Book'>
            <h3>Let's go places together</h3>
            <p>Discover the latest offers and news and start planning your next trip with us.</p>
           </div>
           <div className='OS_Button_Book'>
           <button>See All</button>
           </div>
        </div>
     
       <div className='OS_Map'>
        <img className='Map-Image' src={ImgMap} alt="Map-Image" />
        <div className='OS-map-frame OS-map'>
            <div><img src={ImgOneFrame} alt="place-1" /></div>
            <div className='OS-map-frame1'> <h6>James Doe</h6>
                   <p>Boarding Pass N’123</p>
         </div>
        </div>
        <div className='OS-ImgArrow'> <img src={ImgArrow } alt="kjnk" /></div>
        <div className='OS-Map-frame2 OS-map'>
            <div> <img src={ImgTwoFrame} alt="place-2" /></div>
            <div className='OS-map-frame1'> <h6>James Doe</h6>
                   <p>Boarding Pass N’123</p>
         </div>
        </div>
        <div className='OS-ImgArrow1'> <img src={ImgArrow1 } alt="kjnk" /></div>
        <div className='OS-Map-frame3 OS-map'>
            <div> <img src={ImgThreeFrame} alt="place-2" /></div>
            <div className='OS-map-frame1'> <h6>James Doe</h6>
                   <p>Boarding Pass N’123</p>
         </div>
        </div>
        <div className='OS-Map-frame4 OS-map'>
            <div> <img src={ImgFourFrame} alt="place-2" /></div>
            <div className='OS-map-frame1'> <h6>James Doe</h6>
                   <p>Boarding Pass N’123</p>
         </div>
        </div>
        <div className='OS-ImgArrow2'> <img src={ImgArrow1 } alt="kjnk" /></div>
         <div className='OS-Map-frame5 OS-map'>
            <div> <img src={ImgFiveFrame} alt="place-2" /></div>
            <div className='OS-map-frame1'> <h6>James Doe</h6>
                   <p>Boarding Pass N’123</p>
         </div>
        </div>
        </div>
</section>
  )
}


