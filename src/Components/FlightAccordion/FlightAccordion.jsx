import './FlightAccordion.css'
import { useState } from 'react'
const FlightAccordion = () => {
    const [active, setActive] = useState(null)
    const ActivePanel = (panelId) => {
        setActive(panelId)
    }
    return (
    <section className="Aya-Accordion">
        <div className="Accordion-Header" style={{background : active ===1 ?  "#FF8500" : "#fff"}} onClick={() => ActivePanel(1)}>
            <div className="Header-Body">
                <p className='Header-Body-para1'>Pay in full</p>
                <p className='Header-Body-para2'>Pay the total and you are all set</p>
            </div>
            <div className="Header-icon">
                <img  src= {active===1 ? "./../src/assets/images/icon2.png" : "./../src/assets/images/iconActive.svg" } alt="iconActive" />
            </div>
        </div>
        <div className="Accordion-Header-Hiden" style={{background : active ===2 ? "#FF8500" : "#fff"}} onClick={() => ActivePanel(2)}>
            <div className="Header-Body-Hiden">
                <p className='Header-Body-Hiden-para1'>Pay part now, part later</p>
                <p className='Header-Body-Hiden-para2'>Pay 207.43 $ now, and the rest (207.43 $) will be automatically charged to the same payment method on Nov 14, 2022. No extra fees.</p>
                <p className='Header-Body-Hiden-para3'>More info</p>
            </div>
            <div className="Header-icon">
                <img src= {active===2 ? "./../src/assets/images/icon2.png" : "./../src/assets/images/iconActive.svg" } alt="iconActive" />
            </div>
        </div>
    </section>
    )
}

export default FlightAccordion