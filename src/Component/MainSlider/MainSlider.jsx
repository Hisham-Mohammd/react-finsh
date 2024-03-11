import React from 'react'
import style from './MainSlider.module.css'
import Slider1 from '../../images/slider-image-3.jpeg'
import Slider2 from '../../images/slider-image-2.jpeg'
import Slider3 from '../../images/slider-image-1.jpeg'

import img1 from '../../images/grocery-banner.png'
import img2 from '../../images/grocery-banner-2.jpeg'
import Slider from 'react-slick'

export default function MainSlider() {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed:3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
        
      };
return <>
    <div className="   row my-3 g-0 ms-5">
        <div className=" col-md-8  ">
            <Slider {...settings} >
                <img src={Slider1} height={400} className='w-100'></img>
                <img src={Slider2} height={400} className='w-100'></img>
                <img src={Slider3} height={400} className='w-100'></img>
            </Slider>
        </div>
        <div className="col-md-3 ">
            <div className="imadges">
                <img src={img1} className=' w-100' height={200} alt="" />
                <img src={img2} className='w-100' height={200} alt="" />
                
            </div>
        </div>
    </div>
    </>

}
