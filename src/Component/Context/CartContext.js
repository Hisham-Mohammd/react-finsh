import axios from "axios";

import { createContext } from "react";

export let CartContext=  createContext()

export default function CartContextprovider(props){
    let headers ={
        token : localStorage.getItem('UserToken')
    }
    function checkOutsession(cartId , Shippingaddress) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,{
            Shippingaddress
        },
        {
            headers
        }
        )
        .then((response)=>response)
        .catch((err)=>err)
    }
    function addToCart(productId) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{
            productId
        },
        {
            headers
        }
        )
        .then((response)=>response)
        .catch((err)=>err)
    }
    function gitcartItems() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,
        {
            headers
        }
        )
        .then((response)=>response)
        .catch((err)=>err)
    }
    function deletecartItems(productId) {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        {
            headers
        }
        )
        .then((response)=>response)
        .catch((err)=>err)
    }
    function UbdatecartItems(productId , count) {
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
            count
        },
        {
            headers
        }
        )
        .then((response)=>response)
        .catch((err)=>err)
    }
    return<>
    
    <CartContext.Provider value={{addToCart , gitcartItems ,deletecartItems , UbdatecartItems , checkOutsession}}>
        {props.children}
    </CartContext.Provider>
    
    </>

}