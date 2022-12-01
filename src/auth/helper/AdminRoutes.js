import React from 'react'
import {isAuthenticated} from "../helper/index"

import { Outlet, Navigate } from 'react-router-dom'

const AdminRoutes = () => {
  
  return(
      isAuthenticated().user.role == "Admin" ? <Outlet/> : <Navigate to="/"/>
  )
}

export default AdminRoutes