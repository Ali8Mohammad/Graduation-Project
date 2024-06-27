import './Favouritesmain.css'
import img1 from './../../assets/images/Hotel-listing-1.png'
import img2 from './../../assets/images/Location-f.svg'
import img3 from './../../assets/images/star-f.svg'
import img4 from './../../assets/images/cafe-f.svg'
import img5 from './../../assets/images/Place-2-f.png'
import img6 from './../../assets/images/Place-3-f.png'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Favoritesmain () {
    const info = [
        {
            id:1,
            title:"CVK Park Bosphorus Hotel Istanbul",
            location:"Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437",
            reviews:"371 reviews",
            price:"240 $",
            image:img1
        },
        {
            id:2,
            title:"Eresin Hotels Sultanahmet - Boutique Class",
            location:"Kucukayasofya No. 40 Sultanahmet, Istanbul 34022",
            reviews:"54 reviews",
            price:"104 $",
            image:img5
        },
        {
            id:3,
            title:"Eresin Hotels Sultanahmet - Boutique Class",
            location:"Kucukayasofya No. 40 Sultanahmet, Istanbul 340227",
            reviews:"54 reviews",
            price:"104 $",
            image:img6
        }
    ]



    return (
        <section className='MH-favorites-main'>
            {
                            info.map((item) => {
                                return (
                                    <div key={item.id} className="MH-favorites-box">
                                    <div className="MH-image">
                                        <img src={item.image} alt="not-found" />
                                    </div>
                                    <div className="MH-favorites-info">
                                        <div className="MH-infos">
                                        <div className="MH-info1">
                                            <h2>{item.title}</h2>
                                            <div className="MH-location">
                                                <img src={img2} alt="not-found" />
                                                <span>{item.location}</span>
                                            </div>
                                            <div className="MH-star">
                                                <div className="MH-star1">
                                                <img src={img3} alt="not-found" />
                                                <img src={img3} alt="not-found" />
                                                <img src={img3} alt="not-found" />
                                                <img src={img3} alt="not-found" />
                                                <img src={img3} alt="not-found" />
                                                <span>5 Star Hotel</span>
                                                </div>
                                                <div className="MH-star2">
                                                    <img src={img4} alt="" />
                                                  <p>  <span>20+ </span>Aminities</p>
                                                </div>
                                            </div>
                                            <div className="MH-evaluation">
                                                <div className="MH-number"><span>4.2</span></div>
                                                <p><span>Very Good </span>{item.reviews}</p>
                                            </div>
                                        </div>
                                        <div className="MH-info2">
                                            <span>starting from</span>
                                            <p>{item.price}<span>/night</span></p>
                                            <p className='MH-excl'>excl.tax</p>
                                        </div>
                                        </div>
                                        <div className="MH-box-button">
                                            <div className="MH-box-button1">
                                            <FontAwesomeIcon icon={faHeart} />
                                            </div>
                                            <div className="MH-box-button2">
                                                <button>View Place</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
            }

        </section>
    )
}