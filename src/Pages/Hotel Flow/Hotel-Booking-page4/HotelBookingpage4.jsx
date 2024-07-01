import BookingTicket from '../../../Components/Booking-detail-Tick/Bookingdetailticket'
import Bookinginfo from '../../../Components/Booking-detail-info/Bookingdetailinfo'
import Navigation from '../../../Components/Nav/Nav'
import './HotelBookingpage4.css'
import img1 from './../../../assets/images/Vector 1.svg'
import img2 from './../../../assets/images/Hotel-booking.svg'
import img3 from './../../../assets/images/Vector 4.svg'
import img4 from './../../../assets/images/Client-1.png'
import img6 from './../../../assets/images/timmer.svg'
import img7 from './../../../assets/images/door.svg'
import img9 from './../../../assets/images/CVK-booking.png'
import imgticket from './../../../assets/images/hotel-ticket.png'

import Footer from '../../../Components/Footer/Footer'
import Newsletter from '../../../Components/Newsletter/Newsletter'
export default function HotelBookingpage4() {
    const information = [
      {  id:1,
      time:"Thur, Dec 8",
      location:"Check-In",
      time2:"Fri, Dec 9",
      location2:"Check-Out",
      airplan:[img1,img2,img3],
      image:img4,
       name:"James Doe",
        class:"Superior room - 1 double bed",
        image6:img6,
        ftime1:"check-in time",
        ftime2:"12:00",
        image7:img6,
        gate:"check-out time",
        gatenumber:"11:30pm",
        imagemap:img9,
        empty:"or 2 twin beds",

      }
        ]
      const head = [
        {
          id:1,
          title:"CVK Park Bosphorus Hotel Istanbul",
          price:"265 $",
          Ticket:imgticket
        }
      ]
      const card = [
        {
          id:1,
          images:img6,
          title:"check-in time",
          subTitle:"12:00pm",
        },
        {
          id:2,
          images:img6,
          title:"check-out time",
          subTitle:"11:30pm",
  
        },
       { id:3,
        images:img7,
        title:"Room no",
        subTitle:"On arival"
       },
  
      ]
    return (
       <section className='MH-HotelBooking'>
        <Navigation/>
        <BookingTicket Main1={information} head={head} card={card}/>
        <Bookinginfo/>
        {/* <Newsletter/> */}
        <Footer/>
       </section>
    )
}