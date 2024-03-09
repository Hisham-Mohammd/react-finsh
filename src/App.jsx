import React, { useContext } from 'react'
import Brands from './Component/Brands/Brands'
import Carts from './Component/Carts/Carts'
import Categories from './Component/categories/categories'
import Product from './Component/products/product'
import Register from './Component/register/register'
import LougOut from './Component/LougOut/LougOut'
import Home from './Component/Home/Home'
import Layout from './Component/Layout/Layout'
import NotFoundBadg from './Component/NotFoundBadg/NotFoundBadg'
import LOgin from './Component/login/login'
import Forget from './Component/Forget/Forget'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import ConterContextProvider from './Context/ConterContext'
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute'

import Prodctdetails from './Component/Prodctdetails/ProdctDetails'
import { UserContext } from './Context/UserContext'
import { Toaster } from 'react-hot-toast'









export default function App() {
  let routers = createHashRouter([
    {path: '' , element: <Layout/> , children:[
        {indx: true ,element : <ProtectedRoute><Home/></ProtectedRoute>},
      
        {path: 'Brands' ,element :<ProtectedRoute><Brands/></ProtectedRoute> },
        
        
        {path: 'login' ,element : <LOgin/>},
        {path: 'Home' ,element : <ProtectedRoute><Home/></ProtectedRoute>},
        
      
        {path: 'Carts' ,element : <ProtectedRoute><Carts/></ProtectedRoute>},
        {path: 'Categories' ,element : <ProtectedRoute><Categories/></ProtectedRoute>},

      
        {path: 'Product' ,element : <ProtectedRoute><Product/></ProtectedRoute>},
        {path: 'Prodctdetails/:id' ,element : <ProtectedRoute><Prodctdetails/></ProtectedRoute>},
        {path: 'Register' ,element : <Register/>},
        {path: 'LougOut' ,element : <LougOut/>},
        {path: 'Forget' ,element : <Forget/>},
        {path: '*' ,element : <NotFoundBadg/>},
        
    ]}
  ])
let{setUserToken}=  useContext(UserContext)
if (localStorage.getItem('UserToken')) {
  setUserToken(localStorage.getItem('UserToken'))
  
}
  return<>
  
 

   <ConterContextProvider>

    <RouterProvider router={routers}></RouterProvider>
    <Toaster/>
   </ConterContextProvider>
    
    
  
  </>
  
}
