import React, { useEffect } from 'react'
import style from './Brands.module.css'
import { getBrans } from '../../redux/brandSils'
import { useDispatch, useSelector } from 'react-redux'
import { DotLoader } from 'react-spinners'

export default function Brands() {
 let {brand ,isLoading}=   useSelector(({brand})=>brand)
    let despatch = useDispatch()
    useEffect(()=>{
        despatch(getBrans())
    },[])
return <>
    {isLoading ? <div className='loadinG'>
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

            </div>
                :
                <div className="row py-5">
                    <h2 className=' text-success  text-center tx'>All Brans</h2>
                    {brand.map(brand =>  
                    <div key={brand._id} className="  col-md-3 border-1  ">
                        
                        <div className="po bre  m-2">
                            <img src={brand.image} className='w-100' alt={brand.name} />
                            <p className=' text-center'>{brand.name}</p>
                        </div>
                     </div>)}
                </div>
                
                
                }
    </>

}
