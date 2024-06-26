import React, { useState } from 'react'
import '../HotalMap/HotalMap.css'
import './Amenities.css'
import pool from '../../assets/images/NMPool.svg'
import spa from '../../assets/images/NMSpa.svg'
import restaurant from '../../assets/images/NMRestaurant.svg'
import service from '../../assets/images/NMService.svg'
import fitness from '../../assets/images/NMFitness.svg'
import bar from '../../assets/images/NMBar.svg'
import wifi from '../../assets/images/NMWi-Fi.svg'
import tea from '../../assets/images/NMTea.svg'

export default function Amenities() {
    const [showPopup, setShowPopup] = useState(false);
    const items = [
        {
            id: 1,
            img: pool,
            title: 'Outdoor pool',
            alt: 'pool'
        },
        {
            id: 2,
            img: fitness,
            title: 'Fitness center',
            alt: 'dumbbell'
        },
        {
            id: 3,
            img: pool,
            title: 'Indoor pool',
            alt: 'pool'
        },
        {
            id: 4,
            img: bar,
            title: 'Bar/Lounge',
            alt: 'galss'
        },
        {
            id: 5,
            img: spa,
            title: 'Spa and wellness center',
            alt: 'spa'
        },
        {
            id: 6,
            img: wifi,
            title: 'Free Wi-Fi',
            alt: 'wi-fi'
        },
        {
            id: 7,
            img: restaurant,
            title: 'Restaurant',
            alt: 'fork'
        },
        {
            id: 8,
            img: tea,
            title: 'Tea/coffee machine',
            alt: 'cup'
        },
        {
            id: 9,
            img: service,
            title: 'Room service',
            alt: 'dish'
        },
    ]
    const amenities = [
        {
            id: 1,
            title: 'Basics',
            ul: [
                'Free Wi-Fi',
                'Internet',
                'Towels',
                'Fire extinguisher',
                'Free toiletries',
                'Air-conditioned',
                'Conditioner',
                'Linens',
                'Shampoo',
                'Room service',
                'Telephone',
            ],
        },
        {
            id: 2,
            title: 'Bathroom',
            ul: [
                'Shower',
                'Toilet paper'
            ],
        },
        {
            id: 3,
            title: 'Pool',
            ul: [
                'Indoor pool',
                'Outdoor pool',
                'Pool towels'
            ],
        },
        {
            id: 4,
            title: 'Fitness',
            ul: [
                'Fitness center'
            ],
        },
        {
            id: 5,
            title: 'Dining',
            ul: [
                'Tea/coffee machine',
            ],
        },
        {
            id: 6,
            title: 'Services',
            ul: [
                'Spa and wellness center',
                'Bar/Lounge',
                'Restaurant',
            ],
        },
        {
            id: 7,
            title: 'Parking and transportation',
            ul: [
                'Free parking'
            ],
        },
        {
            id: 8,
            title: 'Media and entertainment',
            ul: [
                'Flat-screen TV',
                'Shared lounge/TV area',
                'Cable or satellite TV',
            ],
        },
    ]
    const handleLinkClick = (event) => {
        event.preventDefault();
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };
    return (
        <div className='NM_Amenities'>
            <div className="NM_Box">
                <h2>Amenities</h2>
                <div className='NM_Items'>
                    {
                        items.map(item => (
                            <div key={item.id} className="NM_Item">
                                <img src={item.img} alt={item.alt} />
                                <h3>{item.title}</h3>
                            </div>
                        ))
                    }
                    <div className="NM_Item_EndText">
                        <a onClick={handleLinkClick} href="#">+24 more</a>
                    </div>
                </div>
            </div>
            {showPopup && (
                <div className="NM_Popup">
                    <div className="NM_Popup_Content">
                        <span className="NM_Close" onClick={handleClosePopup}>&times;</span>
                        <h2>More Amenities</h2>
                        <div className="NM_More">
                            {
                                amenities.map(amenity => (
                                    <div key={amenity.id} className="NM_Amenity">
                                        <h3>{amenity.title}</h3>
                                        <ul>
                                            {amenity.ul.map((li, index) => (
                                                <li key={index}>{li}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
