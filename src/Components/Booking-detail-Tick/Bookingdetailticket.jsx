import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faLocationDot, faShareNodes } from '@fortawesome/free-solid-svg-icons'
import img9 from './../../assets/images/Frame.svg'
import './Bookingdetailticket.css'

export default function BookingTicket ({Main1, Main2head,Main2content , Main3image ,title ,price } ) {
    return (
        <section className='MH-container'>
                <div className="MH-head">
                <p>Turkey <FontAwesomeIcon icon={faChevronRight} /> Istanbul <FontAwesomeIcon icon={faChevronRight} /><span className='MH-sapn'> CVK Park Bosphorus Hotel Istanbul</span> </p>
                <div className="MH-content">
                    <div className="MH-content1">
                        {title}
                        <div className="MH-location-path">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</span>
                        </div>
                    </div>
                    <div className="MH-content2">
                        {price}
                        <div className="MH-download-btn">
                            <div className="MH-share-icon">
                                <FontAwesomeIcon icon={faShareNodes} />
                            </div>
                            <button>Download</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="MH-main">
                <div className="MH-main-1-2">
                    {Main1}
                    <div className="MH-main2">
                        {Main2head}
                        {Main2content}
                        <div className="MH-main2-footer">
                           <div>
                            <p>EK</p>
                            <span>ABC12345</span>
                           </div>
                           <img src={img9} alt="not-found" />
                        </div>
                    </div>
                </div>
                <div className="MH-main3">
                    {Main3image}
                </div>
            </div>
        </section>
    )
}