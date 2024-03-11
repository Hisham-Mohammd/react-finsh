import React from 'react'
import style from './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../footter/footer'
import {Outlet} from 'react-router-dom'
import { Offline, Online } from "react-detect-offline";
export default function layout() {
  
  
return <>
   
  <Navbar/>
  
  <div className="container">

  
    <Offline> <div className="loadinG text-min">Only shown offline (surprise!)</div></Offline>

  <Outlet></Outlet>
  
   </div>
   <Footer/>
    </>

}
