import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <section className='NM_Footer'>
        <div className='NM_Content'>
            <div className='NM_LogoIcons'>
                <img src="./src/assets/images/logofooter.svg" alt="" />
                <div className='NM_Icons'>
                    <div className='NM_Facebook'>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src="./src/assets/images/facebook.svg" alt="facebook" />
                        </a>
                    </div>
                    <div className='NM_Twitter'>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src="./src/assets/images/twitter.svg" alt="twitter" />
                        </a>
                    </div>
                    <div className='NM_Youtube'>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src="./src/assets/images/youtube.svg" alt="youtube" />
                        </a>
                    </div>
                    <div className='NM_Instagram'>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img src="./src/assets/images/instagram.svg" alt="instagram" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="NM_Right">
                <div className="NM_Destinations">
                    <h6>Our Destinations</h6>
                    <p>Canada</p>
                    <p>Alaksa</p>
                    <p>France</p>
                    <p>Iceland</p>           
                </div>
                <div className="NM_Activities">
                    <h6>Our Activities</h6>
                    <p>Northern Lights</p>
                    <p>Cruising & sailing</p>
                    <p>Multi-activities</p>
                    <p>Kayaing</p>  
                </div>
                <div className="NM_Blogs">
                    <h6>Travel Blogs</h6>
                    <p>Bali Travel Guide</p>
                    <p>Sri Lanks Travel Guide</p>
                    <p>Peru Travel Guide</p>
                    <p>Bali Travel Guide</p>  
                </div>
                <div className="NM_About">
                    <h6>About Us</h6>
                    <p>Our Story</p>
                    <p>Work with us</p>  
                </div>
                <div className="NM_Contact">
                    <h6>Contact Us</h6>
                    <p>Our Story</p>
                    <p>Work with us</p>  
                </div>
            </div>
        </div>
    </section>
  )
}