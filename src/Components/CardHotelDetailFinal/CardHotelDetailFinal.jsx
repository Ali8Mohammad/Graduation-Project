import './CardHotelDetailFinal.css'
import Card from 'react-bootstrap/Card';
import imgLocation from './../../assets/images/Location.svg'
const CardHotelDetailFinal = () => {
    return (
        <section className='Aya_Hotel_Details_Final'>
        <Card className='cards'>
            <Card.Body>
            <div className='part1 d-flex justify-content-between'>
                <Card.Title className='title'>Superior room - 1 double bed or 2 twin beds</Card.Title>
                <span className='span1'>240 $<span className='span2'>/night</span></span> 
            </div>
            <div className='part2 '>
                <div className="part2-1 d-flex">
                    <Card.Img className='image' src="./../src/assets/images/cardHotel.svg" />
                    <p className='part2-2 p'>
                        <p className='span1'>CVK Park Bosphorus Hotel Istanbul</p>
                        <p className='span2'><img src={imgLocation} alt="Location" /> Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
                    </p>
                </div>
            </div>
            <div className="part3">
                <div className="part3-1">
                    <Card.Title className='span1'>Thursday, Dec 8</Card.Title>
                    <Card.Title className='span2'>Check-In</Card.Title>
                </div>
                <div className="part3-2">
                    <Card.Img className='image-line5' src="./../src/assets/images/Line5.svg" />   
                    <Card.Img className='image-vector' src="./../src/assets/images/VectorHotel.svg" />   
                    <Card.Img className='image-line6' src="./../src/assets/images/Line6.svg" />
                </div> 
                <div className="part3-3">
                    <Card.Title className='span3'>Friday, Dec 9</Card.Title>
                    <Card.Title className='span4'>Check-Out</Card.Title>
                </div>
            </div>
            </Card.Body>
        </Card>
        </section>
    )
}

export default CardHotelDetailFinal