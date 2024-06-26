import React from 'react'
import './FlightSearchBook.css'
import { Col, Row } from 'react-bootstrap'

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

const data2=[ {img:"./src/assets/images/Travel-3.png",
     class:" img1 img2"},
    {img:"./src/assets/images/Travel-4.png",  
        class:" img img2"},  
   ]
   const data3=[ {img:"./src/assets/images/Travel-1.png",
    class:" img1 "},
   {img:"./src/assets/images/Travel-2.png",  
       class:" img  img4"},  
  ]
  return (
    <>
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
             <div className={item.class} >
         <div className='OS_Travel_T'>
            <div className='OS_Travel_Title'>
                <h6>{item.title}</h6>
                <p>{item.paragraf}</p>
            </div>
            <div><p className='OS_Sale'>{item.sale}</p></div> 
            </div>
            <div className='OS-btn-Book'><button>Book Flight</button></div>
             </div>
 </>
})}
         </Row>
   </section>
<section className=''>
   <div className='OS_one_Title MS-padding'>
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
        <p className='OS-P'>Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.</p>
       <div className='OS_div_Btn'> <button className='OS_btn_Book'>Book Flight</button></div>
    </div>
 <div className='OS-two-Backing'>
 <div className='OS_img_Travel'>{data3.map((item)=>{
        return<>
    <img className={item.class} src={item.img} alt="travel" />
 </>})}</div>
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


