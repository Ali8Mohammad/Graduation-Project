import "./Places.css"
import firstplace from "./../../assets/images/Istanbul.png"
import secondplace from "./../../assets/images/Sydney.png"
import thirdplace from "./../../assets/images/Baku.png"
import fourplace from "./../../assets/images/Male.png"
import fiveplace from "./../../assets/images/Paris.png"
import sixplace from "./../../assets/images/New york.png"
import sevenplace from "./../../assets/images/London.png"
import eightplace from "./../../assets/images/Tokyo.png"
import nineplace from "./../../assets/images/Dubai.png"
import CardPlaces from "../CardPlaces/CardPlaces"
export default function Places() {
    const PlacesData = [
        {
            id: 1,
            image: firstplace,
            title: "Istanbul, Turkey",
            description: "Flights . Hotels . Resorts",
            className:"MS-CardPlace"
        },
        {
            id: 2,
            image: secondplace,
            title: "Sydney, Australia",
            description: "Flights . Hotels . Resorts",
              className:"MS-CardPlace"
        },
        {
            id: 3,
            image: thirdplace,
            title: "Baku, Azerbaijan",
            description: "Flights . Hotels . Resorts",
              className:"MS-CardPlace"
        },
        {
            id: 4,
            image: fourplace,
            title: "Malé, Maldives",
            description: "Flights . Hotels . Resorts",
              className:"MS-CardPlace"
        },
        {
            id: 5,
            image: fiveplace,
            title: "Paris, France",
            description: "Flights . Hotels . Resorts",
              className:"MS-CardPlace"
        },
        {
            id: 6,
            image: sixplace,
            title: "New York, US",
            description: "Flights . Hotels . Resorts",
              className:"MS-CardPlace"
        },
        {
            id: 7,
            image: sevenplace,
            title: "London, UK",
            description: "Flights . Hotels . Resorts",
              className:"MS-CardPlace"
        },
        {
            id: 8,
            image: eightplace,
            title: "Tokyo, Japan",
            description: "Flights . Hotels . Resorts",
              className:"MS-CardPlace"
        },
        {
            id: 9,
            image: nineplace,
            title: "Dubai, UAE",
            description: "Flights . Hotels . Resorts",
              className:"MS-CardPlace"
        },
    ]
    return (
        <>
            <section className='MS-placesSection container'>
                <div className="MS-flex container">
                    <div>
                        <h3 className="MS-Head3">Plan your perfect trip</h3>
                        <p className="MS-pargraph">Search Flights & Places Hire to our most popular destinations</p>
                    </div>
                    <button className="MS-BtnseePlaces">See more places</button>
                </div>
                <div className="MS-placesCards">
                    {PlacesData.map((cardPlace, id) => (
                        <CardPlaces key={id} image={cardPlace.image} title={cardPlace.title} description={cardPlace.description} className={cardPlace.className}/>
                    )
                    )}
                </div>
            </section>
        </>
    )
}
