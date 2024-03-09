import React, { useContext }  from 'react'
import style from './navbar.module.css';
import{ Link, Navigate, useNavigate } from 'react-router-dom'
import logo from '../../acess/logo-main.png'
import { ConterContext } from '../../Context/ConterContext.js';
import { UserContext } from '../../Context/UserContext.js';



export default function Navbar() {
 let {count}=useContext(ConterContext)
let {userToken , setUserToken} =useContext( UserContext )
let Navigate = useNavigate()
function LOgout() {
localStorage.removeItem ('UserToken'); 
setUserToken(null);
Navigate('/login')   
}
    return <>
        <div className=' '>
            <nav className="navbar navbar-expand-lg  bg-dark   ">
                <div className="container ">
                    <Link className="navbar-brand  w-25" to={'Home'}>
                        <img src={logo} alt="" className=' w-50  ' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg- ">
                            {userToken !=null?<>
                                <li className="nav-item">
                                <Link className="nav-link text-white" to={'Home'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to={'Carts'}>carts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to={'categories'}>categories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to={'Brands'}>Brands</Link>
                            </li>

                            
                            </>:'' }
                           
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                            <i className="fa-brands fa-facebook"></i>
                                <i className=' fe  fa-twitter' ></i>
                                <i className='feb fa-instagram' ></i>
                                <i className='feb fa-youtube' ></i>
                            </li>
                            {userToken !=null ?<><li className="nav-item ">
                              

                                <span onClick={LOgout} className="nav-link  text-white  " to={'LogOut'}>LogOut</span>

                            </li></>:<><li className="nav-item">
                                <Link className="nav-link text-white" to={'register'}>Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to={'LOgin'}>login</Link>
                            </li></>}
                            
                            

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    </>

}
