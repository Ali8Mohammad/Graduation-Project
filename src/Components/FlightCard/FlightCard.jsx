import './FlightCard.css'
import Card from 'react-bootstrap/Card';

const FlightCard = () => {
    return (
    <section className='Aya-Flight_Card'>
        <Card style={{ }} className='cards'>
        <Card.Body>
        <div className='part1 d-flex '>
            <Card.Img className='image' src="./../src/assets/images/Booking detail.png" />
            <div className="part1-content">
                <p className='title mb-0'>Economy</p>
                <p className='subtitle mb-0'>Emirates A380 Airbus</p>
                <div className='d-flex align-items-center'>
                    <button className='button'>4.2</button>
                    <p className='reviews mb-0'><span className='fw-bold'>Very Good</span> 54 reviews</p>
                </div>
            </div>
        </div>
        <p className='part2'>Your booking is protected by <span className='part2-span'>golobe</span></p>
        <div className="part3">
            <p className='title'>Price Details</p>
            <div className="list-price d-flex justify-content-between">
                <ul className='list1'>
                    <li className='item'>Base Fare</li>
                    <li className='item'>Discount</li>
                    <li className='item'>Taxes</li>
                    <li className='item4'>Service Fee</li>
                    <li>Total </li>
                </ul>
                <ul className='list2'>
                    <li className='item'>400 $</li>
                    <li className='item'>400 $</li>
                    <li className='item'>400 $</li>
                    <li className='item4'>400 $</li>
                    <li>400 $</li>
                </ul>
            </div>
        </div>
        </Card.Body>
        </Card>
    </section>
    )
}

export default FlightCard