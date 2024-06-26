import React from 'react'
import "./ShowPlaces.css"
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import car from "./../../assets/images/Vector (9).svg"
import plus from "./../../assets/images/Vector (10).svg"
import arrowdown from "./../../assets/images/Vector (7).svg"
import date from"./../../assets/images/date.svg"
import building from"./../../assets/images/building.svg"
import user from"./../../assets/images/User.svg"


export default function ShowPlaces() {
  return (
    <>
      <div className='MS-showFlight MS-ShowPlaces container'>
            <p>Where are you flying? </p>
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
      </div>
    </>
  )
}
