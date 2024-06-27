import React from 'react'
import Navigation from '../../../Components/Nav/Nav'
import Footer from '../../../Components/Footer/Footer';
import Newsletter from '../../../Components/Newsletter/Newsletter';
import './FlightBooking2.css'
import BookingTicket from '../../../Components/Booking-detail-Tick/Bookingdetailticket';
import Bookinginfo from '../../../Components/Booking-detail-info/Bookingdetailinfo';
import img1 from './../../../assets/images/Vector 1.svg'
import img2 from './../../../assets/images/airplane2.svg'
import img3 from './../../../assets/images/Vector 4.svg'
import img4 from './../../../assets/images/Client-1.png'
import img5 from './../../../assets/images/calendar.svg'
import img6 from './../../../assets/images/timmer.svg'
import img7 from './../../../assets/images/door.svg'
import img8 from './../../../assets/images/person.svg'
import imgmap from './../../../assets/images/Booking-map.png'


export default function FlightBooking2() {
  const Main1 = [
    <div className="MH-main1">
    <p>12:00 pm</p>
    <span>Newark(EWR)</span>
    <div className="MH-airplan">
       <div className="MH-airplan1"> <img src={img1} alt="image1" /></div>
       <div className="MH-airplan1"> <img src={img2} alt="image2" /></div>
       <div className="MH-airplan1"> <img src={img3} alt="image3" /></div>
     </div>
     <p>12:00 pm</p>
     <span>Newark(EWR)</span>
 </div>
  ]
  const Main2head = [
    <div className="MH-main2-head">
    <div className="MH-main2-content">
    <img src={img4} alt="image4" />
    <div>
    <p>James Doe</p>
    <span>Boarding Pass N'123</span>
    </div>
    </div>
    <p>Busniess Class</p>

</div>
  ]
  const Main2content =[
  <div className="MH-main2-contents">
  <div className='MH-main2-icons'>
    <div className="MH-main2-content1">
    <div className="MH-main2-image">
        <img src={img6} alt="image6" />
        </div>
        <div>
        <p>Flight time</p>
        <span>12:00</span>
        </div>
    </div>
    <div className="MH-main2-content1">
    <div className="MH-main2-image">
        <img src={img7} alt="image7" />
        </div>
        <div>
        <p>Gate</p>
        <span>A12</span>
        </div>
    </div>
    </div>
    <div className='MH-main2-icons'>
    <div className="MH-main2-content1">
        <div className="MH-main2-image">
        <img src={img5} alt="image5" />
        </div>
        <div>
        <p>Date</p>
        <span>Newark(EWR)</span>
        </div>
    </div>
    <div className="MH-main2-content1">
    <div className="MH-main2-image">
        <img src={img8} alt="image8" />
        </div>
        <div>
        <p>Seat</p>
        <span>128</span>
        </div>
    </div>
    </div>
</div>
  ]
  const Main3image = [
    <img src={imgmap} alt="map-image" />
  ]
  const title = [
    <h2>Emirates A380 Airbus</h2>
  ]
  const price = [
    <p>240 $</p>
  ]
  return (
    <section className='MH-FlightBooking2'>
      <Navigation/>
      <BookingTicket Main1={Main1} Main2head={Main2head} Main2content={Main2content} Main3image={Main3image} title={title} price={price}/>
      <Bookinginfo/>
      <Newsletter/>
      <Footer/>
    </section>
  )
}

