import "./ShowFlight.css"
import"./../../index.css"
import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import plane from "./../../assets/images/Vector (8).svg"
import car from "./../../assets/images/Vector (9).svg"
import btn from"./../../assets/images/Vector (3).svg"
import plus from"./../../assets/images/Vector (10).svg"
import arrowdown from"./../../assets/images/Vector (7).svg"
import twoArrow from"./../../assets/images/Vector (5).svg"


export default function ShowFlight() {
  return (
    <>
      <div className='MS-showFlight container'>
      <Tabs
      defaultActiveKey="Flights"
      id="uncontrolled-tab-example"
      className="mb-3 MS-tabs"
    >
      <Tab eventKey="Flights" title={<spsn className="MS-span MS-border"><img src={plane} alt="plane"className="MS_icon" />Flights</spsn>}className="Ms-tabhome">
     
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
      <span><img src={plus} alt="plus" className="MS-plus"/>Add Promo Code</span>
      <button  className="MS-btnFlight"><img src={btn} alt="arrow"/>Show Filghts</button>
      </div>
      </Tab>
      <Tab eventKey="Stays"title={<spsn className="MS-span MS-Stays"><img src={car} alt="car" className="MS_icon" />Stays</spsn>}>
      </Tab>
    </Tabs>
      </div>
    </>
  )
}
