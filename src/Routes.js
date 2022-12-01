import React from "react";
import './styles.css';
import { BrowserRouter  , Router , Routes ,  Route } from "react-router-dom";
  
import Home from "./core/Home"
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import UserDashBoard from "./user/UserDashBoard";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import AdminDashBoard from "./user/AdminDashBoard";
import AdminAllPermission from "./user/AdminAllPermission";
import AdminRoutes from "./auth/helper/AdminRoutes"
import AddAdmin from "./user/AddAdmin";
import ProfileEdit from "./user/ProfileEdit";
const RoutesList = ()=> {
  return (
    <BrowserRouter>
{/* 
    <Routes >
      <Route  path="/" component={Home} />
      <Route  path="/signup"  component={Signup} /> 
      <Route path="/signin"  component={Signin} />
     
      {/* <PrivateRoute path="/admin/dashboard"  component={AdminDashBoard} /> */}
      {/* <Route  path="/user/dashboard"  exact component ={ UserDashBoard }  /> 
</Routes> */} 




        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/user/profileedit' element={<ProfileEdit/>} />
        <Route element={<PrivateRoutes/>}>
             <Route path='/user/dashboard' element={< UserDashBoard/>} />
         </Route>
        
        <Route path='/signup' element={<Signup/>} />
          <Route element={<AdminRoutes/>}>
          <Route path='/admin/allpermission' element={<AdminAllPermission/>} />
          <Route path='/admin/dashboard' element={<AdminDashBoard/>}/>
          <Route path='/admin/addadmin' element={<AddAdmin/>}/>
          </Route>
         
        </Routes>
  


  </BrowserRouter>

  )
}

export default RoutesList