import './Bookingdetailinfo.css'
export default function Bookinginfo () {
    return (
        <div className="MH-info">
        <h2>Terms and Conditions</h2>
        <h4>Payments</h4>
        <div className="MH-info-content">
            <ul>
                <li><p>If you are purchasing your ticket using a debit or credit card via the Website, we will process these payments via the automated secure common payment gateway which will be subject to fraud screening purposes.</p></li>
                <li> <p>If you do not supply the correct card billing address and/or cardholder information, your booking will not be confirmed and the overall cost may increase. We reserve the right to cancel your booking if payment is declined for any reason or if you have supplied incorrect card information. If we become aware of, or is notified of, any fraud or illegal activity associated with the payment for the booking, the booking will be cancelled and you will be liable for all costs and expenses arising from such cancellation, without prejudice to any action that may be taken against us.</p></li>
                <li> <p>Golobe may require the card holder to provide additional payment verification upon request by either submitting an online form or visiting the nearest Golobe office, or at the airport at the time of check-in. Golobe reserves the right to deny boarding or to collect a guarantee payment (in cash or from another credit card) if the card originally used for the purchase cannot be presented by the cardholder at check-in or when collecting the tickets, or in the case the original payment has been withheld or disputed by the card issuing bank. Credit card details are held in a secured environment and transferred through an internationally accepted system.</p></li>
            </ul>
       
        </div>
        <h4>Contact Us</h4>
        <ul className='MH-info-content2'>
            <li><p>If you have any questions about our Website or our Terms of Use, please contact:</p></li>
            <li><p>Golobe Group Q.C.S.C</p></li>
            <li><p>Golobe Tower</p></li>
            <li><p>P.O. Box: 22550</p></li>
            <li><p>Doha, State of Qatar</p></li>
            <li><p>Further contact details can be found at golobe.com/help</p></li>
        </ul>
    </div>
    )
}