import React, { useContext, useEffect, useState } from 'react'
import style from './carts.module.css'
import { CartContext } from '../Context/CartContext'
import { DotLoader } from 'react-spinners';

export default function Cart() {
    let {UbdatecartItems, gitcartItems , deletecartItems } = useContext(CartContext);
    const [cart, setCart] = useState();
    const [loading, setLoading] = useState(true);
    async function getItems() {
        let { data } = await gitcartItems()
        console.log(data);
        setCart(data)
        setLoading(false)

    }
    async function deleteItem(id) {
        setLoading(true)
        let { data } = await deletecartItems(id)
        console.log(data);
        setCart(data)
        setLoading(false)

    }
    async function Ubdatecart(id , count) {
        setLoading(true)
        if (count < 1) {
            let { data } = await deletecartItems(id)
            setCart(data);
        }else{
            let { data } = await UbdatecartItems(id , count)
            setCart(data)
        }
        
        setLoading(false)

    }
    useEffect(() => {
        getItems()
    }, [])
    return <>
        <div className="text-line p-2 m-5">
            <h2>Cart</h2>

            {loading ? <div className='loadinG'>
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
                : <>
                    <p className='text-min'> numOfCartItems: {cart.numOfCartItems}</p>
                    <p className='text-min'> totalCartPrice: {cart.data.totalCartPrice} EGB</p>

                    {cart.data.products.map(product =>
                        <div key={product.product.id} className="row align-items-center borde m-0">
                            <div className=" col-md-1 p-2">
                                <div className="imge">
                                    <img className=' w-100 ' src={product.product.imageCover} alt={product.product.title} />
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="item ">
                                    <h3 className='h5  fw-bold '>{product.product.title.split(' ').slice(0, 4).join(' ')}</h3>
                                    <p className='text-min'>price : {product.price} EGB</p>
                                    <button onClick={()=>deleteItem(product.product.id)} className='btn'> <i className=' fas fa-trash-can  text-danger'></i> Remove</button>
                                </div>
                               
                            </div>
                            <div className="col-md-1 ">
                                    <div className="count">
                                        <button onClick={()=>Ubdatecart(product.product.id , product.count +1)} className='btn brdr p-1'>+</button>

                                        <span className=' mx-1'>{product.count}</span>

                                        <button onClick={()=>Ubdatecart(product.product.id , product.count -1)} className='btn brdr p-1 '>-</button>
                                    </div>
                                </div>
                        </div>
                    )}

                </>}
        </div>
    </>

}
