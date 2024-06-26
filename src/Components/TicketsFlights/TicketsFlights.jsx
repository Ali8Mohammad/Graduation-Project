import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import FlightSharpIcon from '@mui/icons-material/FlightSharp';
import BedIcon from '@mui/icons-material/Bed';
import './TicketsFlights.css'
import OSChevronDown from '../../assets/images/chevron_down.svg'
import TapFlights from '../TapFlights/TapFlights';
import TapState from '../TapState/TapState';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }
CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
export default  function TicketsFlights  ()  {
    
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
   
 return (
   
    <section className='con Tab-section'>
    <div className='OS-Title-Flight'>
        <h1  className='OS-T-Flight' >Tickets/Bookings</h1>
        <div className='OS-Titlee-Flight'>
            <p  className='OS-Paragraf-Flight'>Upcoming</p>
            <img  className='OS-chev-Flight' src={OSChevronDown} alt="ChevronDown" />
        </div>
      </div>
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs className='Tabs' value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className='Tab tab1' icon={<FlightSharpIcon className='OS-FlightIcon'/>}  iconPosition="start"  label= "Flights"  {...a11yProps(0)} />
          <Tab className='Tab' icon={<BedIcon className='OS-bedIcon'/>}  iconPosition="start"   label="Stays" {...a11yProps(1)} />
</Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
       <TapFlights/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
          <TapState/>
      </CustomTabPanel>
     
    </Box>
    </section>
  
  )
}











