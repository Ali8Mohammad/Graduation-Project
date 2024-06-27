import React from 'react';
import FlightItem from '../FilterItem/FilterItem';

const FlightList = ({ flights }) => {
  if (!flights || flights.length === 0) {
    return <div> dwdsd</div>;
  }

  return (
    <div className="flight-list">
      {flights.map(flight => (
        <FlightItem key={flight.id} flight={flight} />
      ))}
      <button className="show-more">Show more results</button>
    </div>
  );
};

export default FlightList;
