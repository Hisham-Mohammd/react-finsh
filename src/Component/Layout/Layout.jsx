import React from 'react'
import style from './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../footter/footer'
import {Outlet} from 'react-router-dom'
export default function layout() {

  
return <>
   
  <Navbar/>
  <Footer/>
  <div className="container"></div>
  <Outlet></Outlet>
  <footer/>
   
    </>

}
