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
  import imgticket from './../../../assets/images/flight-ticket.png'


  export default function FlightBooking2() {
    const information = [
  {  id:1,
    time:"12:00 pm",
    location:"Newark(EWR)",
    time2:"12:00 pm",
    location2:"Newark(EWR)",
    airplan:[img1,img2,img3],
    image:img4,
    name:"James Doe",
    info:"Boarding Pass N'123",
    class:"Busniess Class",
    image6:img6,
    ftime1:"Flight time",
    ftime2:"12:00",
    image7:img7,
    gate:"Gate",
    gatenumber:"A12",
    image5:img5,
    date:"Date",
    imagemap:imgmap,
    seat:"Seat",
    seatnumber:"128",
    image8:img8,
    empty:"",

  }
    ]
    const card = [
      {
        id:1,
        images:img6,
        title:"Flight time",
        subTitle:"12:00",
      },
      {
        id:2,
        images:img7,
        title:"Gate",
        subTitle:"A12",

      },
     { id:3,
      images:img5,
      title:"Date",
      subTitle:"Newark(EWR)"
     },
     {
      id:4,
      images:img8,
      title:"Seat",
      subTitle:"128",
     }

    ]
    const head = [
      {
        id:1,
        title:"Emirates A380 Airbus",
        price:"240 $",
        Ticket:imgticket
      }
    ]
    return (
      <section className='MH-FlightBooking2'>
        <Navigation/>
        <BookingTicket  Main1={information} head={head} card={card}/>
        <Bookinginfo/>
        {/* <Newsletter/> */}
        <Footer/>
      </section>
    )
  }

