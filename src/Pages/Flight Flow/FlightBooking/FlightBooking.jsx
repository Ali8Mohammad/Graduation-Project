import CardFlightDetailFinal from "../../../Components/CardFlightDetailFinal/CardFlightDetailFinal";
import Path from "../../../Components/Path/Path";
// import Nav from "../../../Components/Nav/Nav";
import './FlightBooking.css'
import Footer from "../../../Components/Footer/Footer";
import FlightCard from "../../../Components/FlightCard/FlightCard";
import FlightAccordion from "../../../Components/FlightAccordion/FlightAccordion";
import FlightForm from "../../../Components/FlightForm/FlightForm";
export default function FlightBooking() {
  return (
    <section className="FlightBooking">
    {/* <Nav/> */}
    <Path/>
    <div className='FlightBookingRow'>
      <div className="FlightContainer" >
          <CardFlightDetailFinal/>
          <FlightAccordion/>
          <FlightForm/>
      </div>
      <FlightCard/>
    </div>
    <Footer/>
    </section>
  )
}

