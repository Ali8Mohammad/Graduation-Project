import './FlightCard.css'
import Card from 'react-bootstrap/Card';

const FlightCard = ({page , imgFlightCard ,title , subtitle ,button ,price_Base_Fare , price_Discount ,price_taxes ,price_Service_Fee,price_total}) => {
    return (
    <section className='Aya-Flight_Card'>
        <Card className={page==='FlightBooking' ? 'flightCards' : 'hoteltCards'}>
        <Card.Body>
        <div className='part1 d-flex '>
            <Card.Img className='image' src={imgFlightCard} />
            <div className="part1-content">
                <p className={page==='FlightBooking' ? 'flightTitle' : 'hotelTitle'} >{title}</p>
                <p className='subtitle mb-0'>{subtitle}</p>
                <div className='d-flex align-items-center'>
                    <button className='button'>{button}</button>
                    <p className='reviews mb-0'><span className='fw-bold'>Very Good</span> 54 reviews</p>
                </div>
            </div>
        </div>
        <div className="Line1"></div>
        <p className='part2'>Your booking is protected by <span className='part2-span'>golobe</span></p>
        <div className="Line1"></div>
        <div className="part3">
            <p className='title'>Price Details</p>
            <div className="list-price ">
                <div className="lists d-flex justify-content-between">
                <ul className='list1'>
                    <li className='item'>Base Fare</li>
                    <li className='item'>Discount</li>
                    <li className='item'>Taxes</li>
                    <li className='item'>Service Fee</li>
                </ul>
                <ul className='list2'>
                    <li className='item'>{price_Base_Fare}</li>
                    <li className='item'>{price_Discount}</li>
                    <li className='item'>{price_taxes}</li>
                    <li className='item'>{price_Service_Fee}</li>
                </ul>
                </div>
                <div className="Line2"></div>
                <ul className="list3 d-flex justify-content-between align-items-center">
                    <li>Total </li>
                    <li className='Price'>{price_total}</li>
                </ul>
            </div>
        </div>
        </Card.Body>
        </Card>
    </section>
    )
}

export default FlightCard