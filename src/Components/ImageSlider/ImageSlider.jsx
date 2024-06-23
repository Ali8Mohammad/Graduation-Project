import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../assets/images/slider1.jpeg';
import image2 from '../../assets/images/slider3.jpeg';
import image3 from '../../assets/images/slider2.jpeg';
import './ImageSlider.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings} className='NM_Slider'>
      <div>
        <img src={image1} alt="Hotel" />
      </div>
      <div>
        <img src={image2} alt="Plane" />
      </div>
      <div>
        <img src={image3} alt="Hotel" />
      </div>
    </Slider>
  );
};

export default ImageSlider;
