import "./ReviewCard.css"
import star from "./../../assets/images/Vector (4).svg"
import google from "./../../assets/images/flat-color-icons_google.png"
export default function ReviewCard(props) {
  return (
    <>
      <div className="MS-ReviewCard">
        <h3>{props.titlecard}</h3>
        <p className="MS-pargraph">{props.textreview}</p>
        <h6 className="MS-textright MS-head6">View more</h6>
        <div className="MS-stars">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </div>
        <h6 className="MS-head6">{props.head6}</h6>
        <p className="MS-pargreview">{props.pargreview}</p>
        <img src={google} alt="google" /><span className="MS-google">Google</span>
        <img src={props.imgReview} alt="place" className="MS-imgReview" />
      </div>
    </>
  )
}
