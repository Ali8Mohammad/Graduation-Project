import { useState } from 'react'
import './Favoriteshead.css'
export default function Favoriteshead () {
    const [showBorderL, setShowBorderL] = useState(false);
    const [showBorderR, setShowBorderR] = useState(false);
    const toggleBorder = () => {
        setShowBorderL(true);
        setShowBorderR(false)
    };
    const toggleBorder1 = () => {
        setShowBorderR(true);
        setShowBorderL(false);
    };
    return(
        <div className='MH-favorites-head' >
            <h2 className='MH-title'>Favourites</h2>
            <div className={`MH-head-content ${showBorderL? 'show-border-l' : ''} ${showBorderR? "show-border-r":""}`}>
                <div className="MH-head-left" onClick={toggleBorder}>
                    <p>Flights</p>
                    <span>2 marked</span>
                </div>
                <div className="MH-head-right" onClick={toggleBorder1}>
                    <p>Places</p>
                    <span>3 marked</span>
                </div>
            </div>
        </div>
    )
}