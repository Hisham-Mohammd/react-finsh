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
import { RouterProvider,  createHashRouter } from 'react-router-dom'
import ConterContextProvider from './Context/ConterContext'
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute'

import Prodctdetails from './Component/Prodctdetails/ProdctDetails'
import { UserContext } from './Context/UserContext'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { stor } from './redux/stot'
import Shippingaddress from './Component/Shippingaddress/Shippingaddress'









export default function App() {
  let routers = createHashRouter([
    {
      path: '', element: <Layout />, children: [
        { indx: true, element: <ProtectedRoute><Home /></ProtectedRoute> },

        { path: 'Brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
        { path: 'Shippingaddress/:cartId', element: <ProtectedRoute><Shippingaddress /></ProtectedRoute> },


        { path: 'login', element: <LOgin /> },
        { path: 'Home', element: <ProtectedRoute><Home /></ProtectedRoute> },


        { path: 'Carts', element: <ProtectedRoute><Carts /></ProtectedRoute> },
        { path: 'Categories', element: <ProtectedRoute><Categories /></ProtectedRoute> },


        { path: 'Product', element: <ProtectedRoute><Product /></ProtectedRoute> },
        { path: 'Prodctdetails/:id', element: <ProtectedRoute><Prodctdetails /></ProtectedRoute> },
        { path: 'Register', element: <Register /> },
        { path: 'LougOut', element: <LougOut /> },
        { path: 'Forget', element: <Forget /> },
        { path: '*', element: <NotFoundBadg /> },

      ]
    }
  ])
  let { setUserToken } = useContext(UserContext)
  if (localStorage.getItem('UserToken')) {
    setUserToken(localStorage.getItem('UserToken'))

  }
  return <>



    <ConterContextProvider>
      <Provider store={stor}>
        <RouterProvider router={routers}></RouterProvider>
        <Toaster />
       </Provider> 
    </ConterContextProvider>


  
  </>
  
}
