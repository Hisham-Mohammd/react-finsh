import React, { useEffect, useState } from 'react'
import style from './Prodctdetails.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { DotLoader } from 'react-spinners';
import Slider from "react-slick";
export default function Prodctdetails() {

    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed:1800,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
        
      };

    const [details, setDetails] = useState([]);
    const [loding, setLoding] = useState(true);
    let {id}= useParams()
     async function gitProdctid() {
    let{data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    setDetails(data.data)
    setLoding(false)
    }
    useEffect(()=>{
        gitProdctid(id)
    }
    ,[])
return <>
    <div>
    {loding ?
            <div className="row  justify-content-center align-content-center vh-100 ">
                <DotLoader
                    height={100}
                    width={100}
                    color="#1ff4c7"
                    cssOverride={{}}
                    loading
                    size={80}
                    speedMultiplier={4}
                />
            </div> : 
            <div className="row align-items-center">
                <div className="col-md-4">
                <Slider {...settings}>
      {details.images.map(image =><img src={image} key={details.id} className='w-100' alt={details.title}/>)}
    </Slider>
  
                </div>
                <div className=" col-md-8">
                    <div className=" details">
                    <div className="product p-2   ">
                            
                            
                               
                            
                            <h3 className=' h6'>{details.title}</h3>
                            <p className='py-3'>{details.description}</p>
                            <span className='  h6 text-main text-info' >{details.category.name}</span>
                            <div className="d-flex py-3  justify-content-between  align-items-center">
                            
                                <span>{details.price} EGP</span>
                                <span>
                                    <i className=' fa fa-star text-warning me-2'></i>
                                    {details.ratingsAverage} </span>
                            </div>
                            <button className='btn  btn-primary text-main w-100'> Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            }
    </div>
    </>

}
