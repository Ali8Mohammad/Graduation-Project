import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import"./../../index.css";
import './FormWithOutTab.css';
import arrowdown from"./../../assets/images/Vector (7).svg";
import twoArrow from"./../../assets/images/Vector (5).svg"
import search from '../../assets/images/search.png'
export default function FormWithOutTab() {
    return (
      <section className='AM_form'>
         <div className="AM-textfields">
          <TextField
            label="From - To"
            id="outlined-size-small"
            defaultValue="Lahore - Karachi"
            size="large"
            className="AM-field"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <img src={twoArrow} alt="icon" className="AM-field-icon" />
                </InputAdornment>
              ),
            }}
          />
           <TextField
            label="Trip"
            id="outlined-size-small"
            defaultValue="Return"
            size="large"
            className="AM-Returnfield"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <img src={arrowdown} alt="icon" className="AM-field-icon" />
                </InputAdornment>
              ),
            }}
          />
           <TextField
            label="Depart- Return"
            id="outlined-size-small"
            defaultValue="07 Nov 22 - 13 Nov 22"
            size="large"
            className="AM-field"
          />
           <TextField
            label="Passenger - Class"
            id="outlined-size-small"
            defaultValue="1 Passenger, Economy"
            size="large"
            className="AM-field AM-lastfield"
          />
          <button className='AM_searchButton'><img src={search}alt="" /></button>
        </div>
            </section>
    )
  }
  