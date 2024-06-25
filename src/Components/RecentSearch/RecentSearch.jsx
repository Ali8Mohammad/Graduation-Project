import CardPlaces from "../CardPlaces/CardPlaces"
import "./RecentSearch.css"
import firstplace from "./../../assets/images/Istanbul.png"
import secondplace from "./../../assets/images/Sydney.png"
import thirdplace from "./../../assets/images/Baku.png"
import fourplace from "./../../assets/images/Male.png"
export default function RecentSearch() {
    const PlacesData = [
        {
            id: 1,
            image: firstplace,
            title: "Istanbul, Turkey",
            description: "325 places",
            className:"MS-recent-card"
        },
        {
            id: 2,
            image: secondplace,
            title: "Sydney, Australia",
            description: "325 places",
             className:"MS-recent-card"
        },
        {
            id: 3,
            image: thirdplace,
            title: "Baku, Azerbaijan",
            description: "325 places",
             className:"MS-recent-card"
        },
        {
            id: 4,
            image: fourplace,
            title: "Malé, Maldives",
            description: "325 places",
             className:"MS-recent-card"
        },
    ]
  return (     
    <>
      <section className='MS-recentsearch'>
      <h3 className='MS-Head3'>Your recent searches</h3>
      <div className="MS-RecentCards">
                    {PlacesData.map((cardPlace, id) => (
                        <CardPlaces key={id} image={cardPlace.image} title={cardPlace.title} description={cardPlace.description}className={cardPlace.className} />
                    )
                    )}
                </div>
      </section>
    </>
  )
}
