import { useEffect, useState } from 'react'
import img1 from './../../assets/images/Visa-add.png'
import Popup from '../Booking-Popup/Popup'
import './Addcard.css'
export default function Addcard ({linkto}) {
    const [active, setActive] = useState(null)
    const [isClicked, setIsClicked] = useState(false);
    const [isClicked1, setIsClicked1] = useState(false);
    const [bgcolor ,setBgColor] = useState(false)
    const [showNewCard, setShowNewCard] = useState(false);
  
    const handleClick = () => {
        if (!isClicked) {
          ActivePanel(1);
          setBgColor(true);
          setIsClicked(true);

        }
        else {
            setIsClicked(false);
            setBgColor(false);
            ActivePanel(null);

          }}


          const handleClickPopup = () => {
            if(!isClicked1) {
                setIsClicked1(true)
                setShowNewCard(true)
            }
            else  {
                setIsClicked1(false)
                setShowNewCard(false)
            }
          }
    const ActivePanel = (panelId) => {
    setActive(panelId)
    }
const link =[
   linkto
]
    return (
        <div className='MH-add'>
             {showNewCard && <Popup link={link}/> }
            <div className="MH-add-card" >
           
            <div className="MH-head" style={{background : bgcolor ===true ?  "#FF8500" : "#fff"}}>
                <div className="MH-head-content1">
                   <img src={img1} alt="" />
                   <p>**** 4321 <span>02/27</span></p>
                </div>
                <div className="MH-head-content2">
                <img onClick={handleClick} src= {active===1 ? "./../src/assets/images/icon2.png" : "./../src/assets/images/iconActive.svg" } alt="iconActive" />
                </div>
            </div>
            <div className="MH-addcard-footer">
                <div className="MH-circle">
                    <button onClick={handleClickPopup} >+</button>
                </div>
                <p>Add a new card</p>
            </div>
           
        </div>
        </div>
    )
}