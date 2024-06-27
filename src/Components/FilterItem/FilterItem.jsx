import React from 'react';


const FlightItem = ({ flight }) => (
  <div className="flight-item">
    <img src={`flight.logo`} alt={`${`flight.airline`} logo`} />
    <div className="flight-details">
      <h4>{`flight.airline`}</h4>
      <p>Very Good ({`flight.reviews`} reviews) - {`flight.rating`} stars</p>
      <p>{`flight.time`}</p>
      <p>{`flight.duration`}</p>
      <p>{`flight.from`} to {`flight.to`}</p>
    </div>
    <div className="flight-price">
      <p>starting from</p>
      <h3>${`flight.price`}</h3>
      <button>View Deals</button>
    </div>
  </div>
);

export default FlightItem;
