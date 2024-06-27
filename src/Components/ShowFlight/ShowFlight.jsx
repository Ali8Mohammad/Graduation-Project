import "./ShowFlight.css"
import"./../../index.css"
import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import plane from "./../../assets/images/Vector (8).svg"
import car from "./../../assets/images/Vector (9).svg"
import btn from "./../../assets/images/Vector (3).svg"
import plus from "./../../assets/images/Vector (10).svg"
import arrowdown from "./../../assets/images/Vector (7).svg"
import twoArrow from "./../../assets/images/Vector (5).svg"
import date from"./../../assets/images/date.svg"
import building from"./../../assets/images/building.svg"
import user from"./../../assets/images/User.svg"

export default function ShowFlight() {
  return (
    <>
      <div className='MS-showFlight container'>
        <Tabs
          defaultActiveKey="Flights"
          id="uncontrolled-tab-example"
          className="mb-3 MS-tabs"
        >
          <Tab eventKey="Flights" title={<spsn className="MS-span MS-border"><img src={plane} alt="plane" className="MS_icon" />Flights</spsn>} className="Ms-tabhome">

            <div className="MS-textfields">
              <TextField
                label="From - To"
                id="outlined-size-small"
                defaultValue="Lahore - Karachi"
                size="large"
                className="MS-field"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img src={twoArrow} alt="icon" className="MS-field-icon" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Trip"
                id="outlined-size-small"
                defaultValue="Return"
                size="large"
                className="MS-Returnfield"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img src={arrowdown} alt="icon" className="MS-field-icon" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Depart- Return"
                id="outlined-size-small"
                defaultValue="07 Nov 22 - 13 Nov 22"
                size="large"
                className="MS-field"
              />
              <TextField
                label="Passenger - Class"
                id="outlined-size-small"
                defaultValue="1 Passenger, Economy"
                size="large"
                className="MS-field"
              />
            </div>
            <div className="MS-right">
              <a><img src={plus} alt="plus" className="MS-plus" />Add Promo Code</a>
              <button className="MS-btnFlight"><img src={btn} alt="arrow" />Show Filghts</button>
            </div>
          </Tab>
          <Tab eventKey="Stays" title={<spsn className="MS-span MS-Stays"><img src={car} alt="car" className="MS_icon" />Stays</spsn>}>
          <div className="MS-textfields">
              <TextField
               InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                     <img src={car} alt="icon" className="MS-field-icon" />
                  </InputAdornment>
                ),
              }}
                label="Enter Destination"
                id="outlined-size-small"
                defaultValue="Istanbul, Turkey"
                size="large"
                className="MS-firstfield"
              />
              <TextField
                label="Check In"
                id="outlined-size-small"
                defaultValue="Fri 12/2"
                size="large"
                 className="MS-field1"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                       <img src={date} alt="icon" className="MS-field-icon" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Check Out"
                id="outlined-size-small"
                defaultValue="Sun 12/4"
                size="large"
                className="MS-field1"
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                         <img src={date} alt="icon" className="MS-field-icon" />
                      </InputAdornment>
                    ),
                  }}
              />
              <TextField
                label="Rooms & Guests"
                id="outlined-size-small"
                defaultValue="1 room, 2 guests"
                size="large"
                className="MS-field1"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="end">
                           <img src={user} alt="icon" className="MS-field-icon" />
                        </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                         <img src={arrowdown} alt="icon" className="MS-field-icon" />
                      </InputAdornment>
                    ),
                  }}
              />
            </div>
            <div className="MS-right">
            <a><img src={plus} alt="plus" className="MS-plus" />Add Promo Code</a>
              <button className="MS-btnFlight"><img src={building} alt="arrow" />Show Places</button>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  )
}
 