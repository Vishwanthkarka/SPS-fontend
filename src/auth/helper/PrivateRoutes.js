
  import { Outlet, Navigate } from 'react-router-dom'
  import {isAuthenticated} from "../helper/index"
const PrivateRoutes = () => {
    
    return(
        isAuthenticated() ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoutes