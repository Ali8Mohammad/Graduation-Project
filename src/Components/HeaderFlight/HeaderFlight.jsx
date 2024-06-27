import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import FlightList from '../FlightList/FlightList';
import FlightItem from '../FilterItem/FilterItem';

const HeaderFlight = () => (
  <header>
    <Tabs defaultActiveKey="cheapest" id="flight-sort-tabs" className="mb-3">
      <Tab eventKey="cheapest" title="Cheapest">
        <FlightItem/>
      </Tab>
      <Tab eventKey="best" title="Best">
        {/* محتوى تبويب Best */}
      </Tab>
      <Tab eventKey="quickest" title="Quickest">
        {/* محتوى تبويب Quickest */}
      </Tab>
      <Tab eventKey="other" title="Other sort">
        {/* محتوى تبويب Other sort */}
      </Tab>
    </Tabs>
  </header>
);

export default HeaderFlight;
