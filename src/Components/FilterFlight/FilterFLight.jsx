import React from 'react';
import FilterGroup from '../FiltersGroup/FilterGroup';
import FlightList from '../FlightList/FlightList';
import HeaderFlight from '../HeaderFlight/HeaderFlight';
import syrianAirLogo from '../../assets/images/Syrianair.svg';
import chamWingsLogo from '../../assets/images/Cham wings.svg';
import qatarAirwaysLogo from '../../assets/images/Qatar airways.svg';
import etihadLogo from '../../assets/images/Etihad.png';


export default function FilterFlight() {
  const filters = {
    price: { min: 50, max: 1200 },
    departureTime: { min: '12:00 AM', max: '11:56 PM' },
    rating: [0, 1, 2, 3, 4, 5],
    airlines: ['SyrianAir', 'Gulf Air', 'Qatar Airways', 'Etihad'],
    trips: ['Non-stop', '1-stop', '2-stop', 'Flexible']
  };
  
  const flights = [
    {
      id: 1,
      logo: {syrianAirLogo},
      airline: 'SyrianAir',
      reviews: 54,
      rating: 4.2,
      time: '12:00 PM - 01:28 PM',
      duration: '2h 28m',
      price: 104,
      from: 'EWR',
      to: 'BNA'
    },
    {
      id: 2,
      logo: {chamWingsLogo},
      airline: 'Cham Wings',
      reviews: 45,
      rating: 4.5,
      time: '12:00 PM - 01:28 PM',
      duration: '2h 28m',
      price: 104,
      from: 'EWR',
      to: 'BNA'
    },
    {
      id: 3,
      logo: {qatarAirwaysLogo},
      airline: 'Qatar Airways',
      reviews: 67,
      rating: 4.7,
      time: '12:00 PM - 01:28 PM',
      duration: '2h 28m',
      price: 104,
      from: 'EWR',
      to: 'BNA'
    },
    {
      id: 4,
      logo: {etihadLogo},
      airline: 'Etihad',
      reviews: 80,
      rating: 4.8,
      time: '12:00 PM - 01:28 PM',
      duration: '2h 28m',
      price: 104,
      from: 'EWR',
      to: 'BNA'
    }
  ];

  return (
    <div className="app">
      <HeaderFlight />
      <div className="content">
        <FilterGroup filters={filters} />
        <FlightList flights={flights} />
      </div>
    </div>
  );
}