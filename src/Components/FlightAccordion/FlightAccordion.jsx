import './FlightAccordion.css'
import { useState } from 'react'
const FlightAccordion = () => {
    const [open, setOpen] = useState(true)
    const toggleAccordion = () => {
        setOpen(!open)
    }
    return (
    <section className="Aya-Accordion">
        <div className="Accordion-Header">
            <div className="Header-Body">
                <p className='Header-Body-para1'>Pay in full</p>
                <p className='Header-Body-para2'>Pay the total and you are all set</p>
            </div>
            <div className="Header-icon">
                <img onClick={toggleAccordion} src="./../src/assets/images/icon2.png" alt="icon2" />
            </div>
        </div>
        <div className={open ? "Accordion-Header-Hiden" : "toogleHiden"}>
            <div className="Header-Body-Hiden">
                <p className='Header-Body-Hiden-para1'>Pay part now, part later</p>
                <p className='Header-Body-Hiden-para2'>Pay 207.43 $ now, and the rest (207.43 $) will be automatically charged to the same payment method on Nov 14, 2022. No extra fees.</p>
                <p className='Header-Body-Hiden-para3'>More info</p>
            </div>
            <div className="Header-icon">
                <input type='radio'/>
            </div>
        </div>
    </section>
    )
}

export default FlightAccordion