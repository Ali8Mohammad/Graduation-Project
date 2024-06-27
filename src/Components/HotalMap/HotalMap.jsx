import React from 'react';
import './HotalMap.css';
import Map from '../../assets/images/NMmap.png';
import Location from '../../assets/images/NMLocation.svg';
import LocationTab from '../../assets/images/NMmaptab.jpg';
import LocationMobile from '../../assets/images/NMmapmobile.jpg';

export default function HotalMap() {
    return (
        <div className='NM_Map'>
            <div className="NM_Line">
                <h2>Location/Map</h2>
                <button className='NM_btn'>
                <div class="eff-1"></div>
                    <a target="_blank" href="https://www.google.com/maps/place/G%C3%BCm%C3%BC%C5%9Fsuyu,+%C4%B0n%C3%B6n%C3%BC+Cd.+No:8,+34437+Beyo%C4%9Flu%2F%C4%B0stanbul,+%D8%AA%D8%B1%D9%83%D9%8A%D8%A7%E2%80%AD/@41.0353456,28.989093,18.16z/data=!4m5!3m4!1s0x14cab77b2ec60e2f:0x2bc6e09cb4ddcbb9!8m2!3d41.0353233!4d28.9879291?authuser=0&entry=ttu">
                        View on google maps
                    </a>
                </button>
            </div>
            <img className='NM_MapImg NM_MapImg-desktop' src={Map} alt="map" />
            <img className='NM_MapImg NM_MapImg-tab' src={LocationTab} alt="map tab" />
            <img className='NM_MapImg NM_MapImg-mobile' src={LocationMobile} alt="map mobile" />
            <div className="NM_Address">
                <img src={Location} alt="location" />
                <p>Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
            </div>
        </div>
    );
}

