import React from 'react'
import style from './/products.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { increase } from '../../redux/ConterClid'


export default function Product() {
    let {count} = useSelector(({counter})=>counter)
    let despath =useDispatch(increase())
return <>
    
<h2>product {count}</h2>
    <button onClick={()=>despath(increase())} className='btn  btn-danger'> inclith</button>
    </>

}
