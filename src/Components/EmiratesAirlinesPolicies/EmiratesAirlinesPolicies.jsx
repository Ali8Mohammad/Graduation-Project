import React from 'react'
import './EmiratesAirlinesPolicies.css'
import watch from '../../assets/images/ion_stopwatch.png';



export default function EmiratesAirlinesPolicies() {
    return (
        <section>
            <div className='RH_Emirates'>
            <p className='RH_title'>Emirates Airlines Policies</p>
            <div className='RH_container_time'>
            <div className='RH_w1'><img src={watch} alt="time" className='RH_time'/> <span className='RH_time_text'>Pre-flight cleaning, installation of cabin HEPA filters.</span>
            </div>
            <div className='RH_w2'><img src={watch} alt="time" className='RH_time'/><span className='RH_time_text2'>Pre-flight health screening questions.</span>
            </div>
            </div>
            </div>



            <div>
            
            </div>


        </section>
    )
}
