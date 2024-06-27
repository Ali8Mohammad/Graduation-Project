import React from 'react';
import Filter from '../Filter/Filter';

const FilterGroup = ({ filters }) => (
  <div className="filters">
    <Filter title="Price">
      <input type="range" min={filters.price.min} max={filters.price.max} />
    </Filter>
    <Filter title="Departure Time">
      <input type="time" min={filters.departureTime.min} max={filters.departureTime.max} />
    </Filter>
    <Filter title="Rating">
      {filters.rating.map(rate => (
        <label key={rate}>
          <input type="checkbox" value={rate} />
          {rate} stars
        </label>
      ))}
    </Filter>
    <Filter title="Airlines">
      {filters.airlines.map(airline => (
        <label key={airline}>
          <input type="checkbox" value={airline} />
          {airline}
        </label>
      ))}
    </Filter>
    <Filter title="Trips">
      {filters.trips.map(trip => (
        <label key={trip}>
          <input type="checkbox" value={trip} />
          {trip}
        </label>
      ))}
    </Filter>
  </div>
);

export default FilterGroup;
