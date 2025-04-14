import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';


export default function Protected({children}) {
   const {token} = useSelector((state)=>state.auth);
   const isAuthenticated = token || localStorage.getItem('token');
   if(!isAuthenticated){
    return(
         <Navigate to='/login' />
    )
   }
   else{
    return (
        {children}
      )
   }
}
