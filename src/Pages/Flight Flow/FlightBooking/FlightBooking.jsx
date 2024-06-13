import CardFlightDetailFinal from "../../../Components/CardFlightDetailFinal/CardFlightDetailFinal";
import Path from "../../../Components/Path/Path";
// import Nav from "../../../Components/Nav/Nav";
import { Row, Col } from 'react-bootstrap' 
import './FlightBooking.css'
import Footer from "../../../Components/Footer/Footer";
import FlightCard from "../../../Components/FlightCard/FlightCard";
export default function FlightBooking() {
  return (
    <section className="FlightBooking">
    {/* <Nav/> */}
    <Path/>
    <Row className='FlightBookingRow'>
      <Col lg={8}>
        <CardFlightDetailFinal/>
      </Col>
      <Col lg={4}>
      <FlightCard/>
      </Col>
    </Row>
    <Footer/>
    </section>
  )
}

