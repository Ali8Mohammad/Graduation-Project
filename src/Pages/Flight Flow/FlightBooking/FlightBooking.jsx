import CardFlightDetailFinal from "../../../Components/CardFlightDetailFinal/CardFlightDetailFinal";
import Path from "../../../Components/Path/Path";
// import Nav from "../../../Components/Nav/Nav";
import './FlightBooking.css'
import Footer from "../../../Components/Footer/Footer";
import FlightCard from "../../../Components/FlightCard/FlightCard";
import FlightAccordion from "../../../Components/FlightAccordion/FlightAccordion";
import FlightForm from "../../../Components/FlightForm/FlightForm";
import imgFlightCard from './../../../assets/images/Booking detail.png'
export default function FlightBooking() {
  return (
    <section className="FlightBooking">
    {/* <Nav/> */}
    <Path country={'Turkey'} city={'Istanbul'} hotel_name={'CVK Park Bosphorus Hotel Istanbul'} />
    <div className='FlightBookingRow'>
      <div className="FlightContainer" >
          <CardFlightDetailFinal/>
          <FlightAccordion Header_Title={'Pay in full'} Header_Body={'Pay the total and you are all set'}
          Header_Title2={'Pay part now, part later'} Header_Body2={'Pay 207.43 $ now, and the rest (207.43 $) will be automatically charged to the same payment method on Nov 14, 2022. No extra fees.'}
          Header_More={'More info'}/>
          <FlightForm/>
      </div>
      <FlightCard page={'FlightBooking'} imgFlightCard={imgFlightCard} title={'Economy'} subtitle={<p className="subtitle" style={{marginBottom: '20px'}}>Emirates A380 Airbus</p>} button={'4.2'}
      price_Base_Fare={'400 $'} price_Discount={'400 $'} price_taxes={'400 $'} price_Service_Fee={'400 $'} price_total={'400 $'}/>
    </div>
    <Footer/>
    </section>
  )
}

