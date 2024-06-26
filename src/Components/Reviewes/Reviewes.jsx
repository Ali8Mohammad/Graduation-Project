import "./Reviewes.css"
import ReviewCard from "../ReviewCard/ReviewCard"
import Review1 from "./../../assets/images/Review-1.png"
import Review2 from "./../../assets/images/Review-2.png"
import Review3 from "./../../assets/images/Review-3.png"

export default function Reviewes() {
  const ReviewesCardData = [
    {
      id: 1,
      titlecard: "“A real sense of community, nurtured”",
      textreview: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...",
      head6: "Olga",
      pargreview: "Weave Studios - Kai Tak",
      imgReview: Review1,
    },
    {
      id: 2,
      titlecard: "“The facilities are superb. Clean, slick, bright.”",
      textreview: "“A real sense of community, nurtured”Really appreciate the help and support from the staff...",
      head6: "Thomas",
      pargreview: "Weave Studios - Olympic",
      imgReview: Review2,
    },
    {
      id: 3,
      titlecard: "“A real sense of community, nurtured”",
      textreview: "Really appreciate the help and support from the staff during thse tough tims. Shoutout to Katie for...",
      head6: "Eliot",
      pargreview: "Weave Studios - Kai Tak",
      imgReview: Review3,
    },
  ]
  return (
    <>
      <section className="MS-ReviewesSection">
        <div className="MS-flex container">
          <div>
            <h3 className="MS-Head3">Reviews</h3>
            <p className="MS-pargraphReview">What people says about Golobe facilities</p>
          </div>
          <button>See All</button>
        </div>
        <div className="MS-reviewCards">
          {ReviewesCardData.map((cardReview, id) => (
            <ReviewCard key={id} titlecard={cardReview.titlecard} textreview={cardReview.textreview} head6={cardReview.head6} pargreview={cardReview.pargreview} imgReview={cardReview.imgReview} />
          )
          )}
        </div>
      </section>
    </>
  )
}
