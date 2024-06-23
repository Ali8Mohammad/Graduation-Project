import Addcard from "../../../Components/AddCard/Addcard";
import CardFlightDetailFinal from "../../../Components/CardFlightDetailFinal/CardFlightDetailFinal";
import FlightAccordion from "../../../Components/FlightAccordion/FlightAccordion";
import FlightCard from "../../../Components/FlightCard/FlightCard";
import FlightForm from "../../../Components/FlightForm/FlightForm";
import Navigation from "../../../Components/Nav/Nav";
import Path from "../../../Components/Path/Path";
import  Footer from "../../../Components/Footer/Footer";
import './FlightBooking3.css'

export default function FlightBooking3() {
    return (
        
        <section className="MH-FlightBooking3">
            <Path/>
           <div className="MH-flight-content">
          
           <div className="MH-content1">
          
               <CardFlightDetailFinal/>
               <FlightAccordion/>
               <Addcard/>
            </div> 
            <div className="MH-content2">
                <FlightCard/>
            </div>    
            </div>  
           <Footer/>
        </section>
    )
}