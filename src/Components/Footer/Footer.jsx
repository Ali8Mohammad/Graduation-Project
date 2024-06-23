import React from 'react'
import './Footer.css'
import img1 from './../../assets/images/logofooter.svg'
import img2 from './../../assets/images/facebook.svg'
import img4 from './../../assets/images/twitter.svg'
import img5 from './../../assets/images/youtube.svg'
import img6 from './../../assets/images/instagram.svg'

export default function Footer() {
  return (
    <section className='NM_Footer'>
        <div className='NM_Content'>
            <div className='NM_LogoIcons'>
                <img src={img1} alt="" />
                <div className='NM_Icons'>
                    <div className='NM_Facebook'>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src={img2} alt="facebook" />
                        </a>
                    </div>
                    <div className='NM_Twitter'>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src={img4} alt="twitter" />
                        </a>
                    </div>
                    <div className='NM_Youtube'>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src={img5} alt="youtube" />
                        </a>
                    </div>
                    <div className='NM_Instagram'>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src={img6} alt="instagram" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="NM_Right">
                <div className="NM_Destinations">
                    <h6>Our Destinations</h6>
                    <a href="#">
                        <p>Canada</p>
                    </a>
                    <a href="#">
                        <p>Alaksa</p>
                    </a>
                    <a href="#">
                        <p>France</p>
                    </a>
                    <a href="#">
                        <p>Iceland</p>
                    </a>           
                </div>
                <div className="NM_Activities">
                    <h6>Our Activities</h6>
                    <a href="#">
                        <p>Northern Lights</p>
                    </a>
                    <a href="#">
                        <p>Cruising & sailing</p>
                    </a>
                    <a href="#">
                        <p>Multi-activities</p>
                    </a>
                    <a href="#">
                        <p>Kayaing</p>
                    </a>  
                </div>
                <div className="NM_Blogs">
                    <h6>Travel Blogs</h6>
                    <a href="#">
                        <p>Bali Travel Guide</p>
                    </a>
                    <a href="#">
                        <p>Sri Lanks Travel Guide</p>
                    </a>
                    <a href="#">
                        <p>Peru Travel Guide</p>
                    </a>
                    <a href="#">
                        <p>Bali Travel Guide</p> 
                    </a> 
                </div>
                <div className="NM_About">
                    <h6>About Us</h6>
                    <a href="#">
                        <p>Our Story</p>
                    </a>
                    <a href="#">
                        <p>Work with us</p>
                    </a>  
                </div>
                <div className="NM_Contact">
                    <h6>Contact Us</h6>
                    <a href="#">
                        <p>Our Story</p>
                    </a>
                    <a href="#">
                        <p>Work with us</p>
                    </a>  
                </div>
            </div>
        </div>
    </section>
  )
}