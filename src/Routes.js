import React from "react";
import './styles.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
  } from "react-router-dom";
  
import Home from "./core/Home"
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import UserDashBoard from "./user/UserDashBoard";

const RoutesList = ()=> {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/user/dashboard" element={<UserDashBoard/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default RoutesList