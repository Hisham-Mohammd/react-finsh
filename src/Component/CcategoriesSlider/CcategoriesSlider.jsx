import React from 'react'
import style from './CcategoriesSlider.module.css'
import Slider from 'react-slick';
import { date } from 'yup';
import axios from 'axios';
import { useQuery } from 'react-query';



export default function CcategoriesSlider() {

    function gitCategoris() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
        
      
      }
      let{data}=useQuery(`Categories`, gitCategoris)
       console.log(data?.data.data);


    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed:3000,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        rows: 2
   
        
      };

return <>
<div className="row">
    <Slider {...settings} >
                {data?.data.data.map(category =><div key={category._id} className='col-md-2'>
                    <div  className="img"></div>
                    <img className='w-100' height={100} src={ category.image} alt={category.name} />
                    <p>{category.name}</p>
                </div>)}
            </Slider>
</div>
   
    </>

}
