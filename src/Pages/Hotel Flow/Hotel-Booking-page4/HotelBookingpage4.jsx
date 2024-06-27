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
import Footer from '../../../Components/Footer/Footer'
import Newsletter from '../../../Components/Newsletter/Newsletter'
export default function HotelBookingpage4() {
    const Main1 = [
        <div className="MH-main1">
        <p>Thur, Dec 8</p>
        <span>Check-In</span>
        <div className="MH-airplan">
           <div className="MH-airplan1"> <img src={img1} alt="image1" /></div>
           <div className="MH-airplan1"> <img src={img2} alt="image2" /></div>
           <div className="MH-airplan1"> <img src={img3} alt="image3" /></div>
         </div>
         <p>Fri, Dec 9</p>
         <span>Check-Out</span>
     </div>
      ]
      const Main2head = [
        <div className="MH-main2-head">
        <div className="MH-main2-content">
        <img src={img4} alt="image4" />
        <div>
        <p>James Doe</p>
        </div>
        </div>
        <div className='MH-main2-title'>
        <p>Superior room - 1 double bed </p>
        <p>or 2 twin beds</p>
        </div>
    
    </div>
      ]
      const Main2content =[
      <div className="MH-main2-contents">
        <div className="MH-main2-content1">
        <div className="MH-main2-image">
            <img src={img6} alt="image6" />
            </div>
            <div>
            <p>check-in time</p>
            <span>12:00pm</span>
            </div>
        </div>
        <div className="MH-main2-content1">
        <div className="MH-main2-image">
        <img src={img6} alt="image6" />
            </div>
            <div>
            <p>check-out time</p>
            <span>11:30pm</span>
            </div>
        </div>
        <div className="MH-main2-content1">
            <div className="MH-main2-image">
            <img src={img7} alt="image5" />
            </div>
            <div>
            <p>Room no</p>
            <span>On arival</span>
            </div>
        </div>
    </div>
      ]
      const Main3image = [
        <img src={img9} alt="CVK-image" />
      ]
      const title = [
        <h2>CVK Park Bosphorus Hotel Istanbul</h2>
      ]
      const price = [
        <p>265 $</p>
      ]
    return (
       <section className='MH-HotelBooking'>
        <Navigation/>
        <BookingTicket Main1={Main1} Main2head={Main2head} Main2content={Main2content} Main3image={Main3image} title={title} price={price}/>
        <Bookinginfo/>
        <Newsletter/>
        <Footer/>
       </section>
    )
}