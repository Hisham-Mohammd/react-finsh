import React, { useContext } from 'react'
import style from './Shippingaddress.module.css'
import { func } from 'prop-types'
import { useFormik } from 'formik'
import { useParams } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'

export default function Shippingaddress() {
  let{checkOutsession}=  useContext(CartContext)
    let {cartId} = useParams()
   async function checkOut(values ) {
       let {data}= await checkOutsession(cartId , values)
       console.log(data);
       if (data.status == 'success') {
        window.location.href = data.session.url
        
       }
        
    }
    let formik =useFormik({
        initialValues:{
            details: '',
            phone: '',
            city : ''
        }, onSubmit : checkOut
    })
return <>
    <div>
<h2>Shippingaddress</h2>
<div className="w-75 mx-auto">
    <form onSubmit={formik.handleSubmit}>
        <label htmlFor="details">details</label>
        <input onChange={formik.handleChange} type="text" id='details' name='details' className=' form-control mb3' />
        <label htmlFor="phone">phone</label>
        <input onChange={formik.handleChange} type="text" id='phone' name='phone' className=' form-control mb3' />
        <label htmlFor="city">city</label>
        <input onChange={formik.handleChange} type="text" id='city' name='city' className=' form-control mb3' />
        <button className=' btn bg-main mt-3' type='submit'> Checkout</button>
    </form>
</div>
    </div>
    </>

}
