import React, { useContext, useEffect, useState } from 'react'
import style from './FetcherProduct.module.css'
import axios from 'axios'
import { DotLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { CartContext } from '../Context/CartContext';
import toast from 'react-hot-toast';



export default function FetcherProduct() {
   
    function gitProdcts() {
        return axios.get('https://ecommerce.routemisr.com/api/v1/products')
        
    }

    let {data, isLoading ,isError , isFetched}=  useQuery('FetcherProduct' , gitProdcts , {
        cacheTime:300 ,
        // refetchOnMount:false,refetchOnWindowFocus:false,
        
    } )
 let {addToCart} = useContext(CartContext)
 async function PostTocart(id){
   let{data} = await addToCart(id)
   if (data.status == 'success') {
    toast.success(data.message , {
        duration: 3000,
    })
   }

 }
    
    return <>



        <h2>FetcherProduct</h2>

        {isLoading ?
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
            </div>


            : <div className="row gy-3 reat-chl">
                {data?.data.data.map(prodcts =>
                    
                    <div key={prodcts.id} className=" col-lg-3  text-black-50 ">
                        
                        <div className="product p-2 bre w-75 container  ">
                           <Link className='nin' to={`/ProdctDetails/${prodcts.id}` }> 
                            <img src={prodcts.imageCover} className='w-100' alt="" />
                           
                                <span className='text-smil  h6 text-main text-info' >{prodcts.category.name}</span>
                            
                            <h3 className=' h6 text-dark'>{prodcts.title.split(' ').splice(0, 2).join(' ')}</h3>
                            <div className="d-flex py-3  justify-content-between  align-items-center">
                                <span>{prodcts.price} EGP</span>
                                <span>
                                    <i className=' fa fa-star text-warning me-2'></i>
                                    {prodcts.ratingsAverage} </span>
                            </div>
                           
                           </Link> 
                            <button onClick={()=>PostTocart(prodcts.id)} className='btn   text-main w-100 botn'> Add To Cart</button>
                        </div>
                        
                    </div>
                    
                    
                )}
            </div>}
    </>

}
