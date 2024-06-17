import "./CardPlaces.css"
export default function CardPlaces(props) {
  return (
    <>
      <div className="MS-CardPlace">
        <img src={props.image} alt="card-img" />
        <div className="MS-cardContent">
          <h5>{props.title}</h5>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  )
}
