import "./FlightAndHotelCard.css"
import arrow from "./../../assets/images/Vector (3).svg"
export default function FlightAndHotelCard(props) {
  return (
    <>
      <div className="MS-FlightHotelCard" style={{ backgroundImage: `url(${props.img})` }}>
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
        <div className="MS-iconbtn">
          <button><img src={arrow} alt="arrow" />{props.btn}</button>
        </div>
      </div>
    </>
  )
}
