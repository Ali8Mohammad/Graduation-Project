import "./FlightAndHotel.css"
import FlightAndHotelCard from "./../FlightAndHotelCard/FlightAndHotelCard"
import Flights from "./../../assets/images/Flight.png"
import Hotels from "./../../assets/images/Hotel 2.png"

export default function FlightAndHotel() {
  const FlightAndHotelData = [
    {
      id: 1,
      img: Flights,
      heading: "Flights",
      text: "Search Flights & Places Hire to our most popular destinations",
      btn: "Show Flights",
    },
    {
      id: 2,
      img: Hotels,
      heading: "Hotels",
      text: "Search Flights & Places Hire to our most popular destinations",
      btn: "Show Hotels",
    },
  ]
  return (
    <>
      <section className="MS-FlightAndHotel container">
        {FlightAndHotelData.map((cardFlight, id) => (
          <FlightAndHotelCard key={id} img={cardFlight.img} heading={cardFlight.heading} text={cardFlight.text} btn={cardFlight.btn} />
        )
        )}
      </section>
    </>
  )
}
