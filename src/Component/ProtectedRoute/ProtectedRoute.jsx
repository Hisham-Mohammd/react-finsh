import React from 'react'
import style from './ProtectedRoute.module.css'
import { Navigate } from 'react-router-dom'




export default function ProtectedRoute(props) {
    if (localStorage.getItem('UserToken')) {
        return props.children
    
        
    }else{
return<Navigate to={'/LOgin'}/>
    }

}
