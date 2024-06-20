import React from 'react'
import './FlightSearchBook.css'
import { Col, Container, Row } from 'react-bootstrap'
import ImgMap  from './../../assets/images/Group.png'
import ImgOneFrame  from './../../assets/images/Place-1.png'
import ImgTwoFrame  from './../../assets/images/Place-2.png'
import ImgThreeFrame  from './../../assets/images/Place-3.png'
import ImgFourFrame  from './../../assets/images/Place-4.png'
import ImgFiveFrame  from './../../assets/images/Place-5.png'
import ImgArrow  from './../../assets/images/arrow.png'
import ImgArrow1  from './../../assets/images/arrow1.png'



export default function FlightSearchBook () {
const data =[
        {
        title:"Melbourne",
        paragraf:"An amazing journey",
        sale:"700$",
        class:"OS-Travel OS-Travel1"
        },
        {
        title:"Paris",
        paragraf:"A Paris Adventure",
        sale:"600$",
         class:"OS-Travel OS-Travel2"
        },
        {
         title:"London",
         paragraf:"London eye adventure",
         sale:"350$",
          class:"OS-Travel OS-Travel3"
        }, 
        {
        title:"Columbia",
        paragraf:"Amazing streets",
        sale:"700$",
        class:"OS-Travel OS-Travel4"
        },
];
const data1=[
    {img:"./src/assets/images/Travel-1.png",
        class:" img img1"
    },
    {img:"./src/assets/images/Travel-2.png",  
    class:" img img"},
   
 
];
const data2=[ {img:"./src/assets/images/Travel-3.png",
     class:" img1 img2"},
    {img:"./src/assets/images/Travel-4.png",  
        class:" img img2"},  
   ]
  return (
    <>
  
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
   <section className='OS_Travel_Section'>
    <div className='OS_oone_Title'>
            <div className='OS_Title_Book'>
            <h3>Fall into travel</h3>
            <p>Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.</p>
           </div>
           <div className='OS_Button_Book'>
           <button>See All</button>
           </div>
        </div>
 <Row className='OS_Travel_R'> {data.map((item)=>{ 
                return<>
             <Col className={item.class} >
         <div className='OS_Travel_T'>
            <div className='OS_Travel_Title'>
                <h6>{item.title}</h6>
                <p>{item.paragraf}</p>
            </div>
            <div><p className='OS_Sale'>{item.sale}</p></div> 
            </div>
            <div className='OS-btn-Book'><button>Book Flight</button></div>
             </Col>
 </>
})}
         </Row>
   </section>
 <section className=''>
   <div className='OS_one_Title'>
            <div className='OS_Title_Book'>
            <h3>Fall into travel</h3>
            <p>Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your  destination.</p>
           </div>
           <div className='OS_Button_Book'>
           <button>See All</button>
           </div>
     </div>
<div className='OS-BackPacking'>
 <div className='OS-one-Backing'>
        <div className='OS-Back_Par'> 
        <h1>Backpacking Sri Lanka</h1>
        <div className='OS-paragraf'>
         <p>From</p>
         <h6>700 $</h6>
        </div>
        </div>
        <p>Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.</p>
       <div className='OS_div_Btn'> <button className='OS_btn_Book'>Book Flight</button></div>
    </div>
 <div className='OS-two-Backing'>
    <div  className='OS_img_Travel'>{data1.map((item)=>{
        return<>
<div className={item.class}> <img src={item.img} alt="travel" /></div></>
})}</div>
      <div className='OS_img_Travel'>{data2.map((item)=>{
        return<>
    <img className={item.class} src={item.img} alt="travel" />
 </>})}</div>
    </div>
        
     </div>
  
   </section>
    </>
  )
}


