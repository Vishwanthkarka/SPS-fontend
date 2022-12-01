import React,{useEffect,useState} from 'react'
import { isAuthenticated } from '../auth/helper/index'
import  {GetAllPermissions} from "./helper/permissioncalls"
import moment from "moment";

export default function AdminDashBoard() {
  const [allPer,setAllPer] = useState([])
useEffect(() => {
  // GetPermissions(isAuthenticated().user.email,isAuthenticated().token,isAuthenticated().user.role).then(data=>(setAllRequests(data.permissionData)))
  GetAllPermissions(isAuthenticated().user.email,isAuthenticated().token, isAuthenticated().user.role).then(
  el => (
    setAllPer(el.products)
    
  )
  ).catch(err=> console.log(err))
  
}, []);

const DateDiff = (from ,to)=>{
  var date1 = moment(to);
  var date2 = moment(from);
  var days = date2.diff(date1, 'days') 
  return days
}
console.log(allPer)
  const NavigtionBar = () => {
    return(
      <div className='w-[290px] h-[100vh] flex flex-col  bg-[#EAEBF5] gap-[70px] pt-[70px] px-5'>
<div className='flex gap-5'>
    <img src= "https://st.depositphotos.com/1269204/1219/i/950/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg" className='w-[50px] h-[50px] rounded-xl' alt="" />
<div className="">
<h4>{isAuthenticated().user.name}</h4>
<p className='font-[Avenirregular]'>{isAuthenticated().user.email}</p>
</div>
</div>

<ul className=''>
    <li className='flex my-7 items-center  gap-2 text-[#606F7B] font-[Avenirregular]'>
    <svg xmlns="http://www.w3.org/2000/svg" width="21.182" height="18.7" viewBox="0 0 21.182 18.7">
  <path id="Icon_material-dashboard" data-name="Icon material-dashboard" d="M4.5,14.889h9.414V4.5H4.5Zm0,8.311h9.414V16.967H4.5Zm11.768,0h9.414V12.811H16.268Zm0-18.7v6.233h9.414V4.5Z" transform="translate(-4.5 -4.5)" fill="#a6abaf"/>
</svg>
<p>
Dashboard
</p>
</li>

<li className='flex my-7 items-center  gap-2 text-[#606F7B] font-[Avenirregular]'>
<svg xmlns="http://www.w3.org/2000/svg" width="23.646" height="21.125" viewBox="0 0 23.646 21.125">
  <g id="Icon_ionic-ios-person-add" data-name="Icon ionic-ios-person-add" transform="translate(-4.501 -4.5)">
    <path id="Path_54" data-name="Path 54" d="M24.285,22.214a31.771,31.771,0,0,0-3.208-.55,3.444,3.444,0,0,1-1.484-.611,9,9,0,0,1-.1-2.6.525.525,0,0,1,.068-.209,7.847,7.847,0,0,0,.634-1.1,11.369,11.369,0,0,0,.468-1.832.434.434,0,0,1,.246-.308,1,1,0,0,0,.48-.737c.191-.864.493-1.2.456-1.843a.731.731,0,0,0-.2-.523.386.386,0,0,1-.123-.407,10.43,10.43,0,0,0,.32-2.509C21.9,6.728,19.913,4.5,16.329,4.5c-3.639,0-5.573,2.228-5.517,4.489a10.875,10.875,0,0,0,.314,2.509A.407.407,0,0,1,11,11.9a.705.705,0,0,0-.2.523c-.037.644.265.979.456,1.843a1.009,1.009,0,0,0,.48.737.444.444,0,0,1,.246.308,11.369,11.369,0,0,0,.468,1.832,8.15,8.15,0,0,0,.634,1.1.358.358,0,0,1,.068.209,8.992,8.992,0,0,1-.1,2.6,3.444,3.444,0,0,1-1.484.611,31.771,31.771,0,0,0-3.208.55c-.874.275-3.405,1.128-3.849,2.877A.456.456,0,0,0,5,25.625H27.654a.454.454,0,0,0,.48-.534C27.691,23.342,25.16,22.489,24.285,22.214Z" fill="#a6abaf"/>
    <path id="Path_55" data-name="Path 55" d="M30.762,20.637h-1.9v-1.9A.738.738,0,0,0,28.125,18h0a.738.738,0,0,0-.738.738v1.9h-1.9a.738.738,0,0,0-.738.738h0a.738.738,0,0,0,.738.738h1.9v1.9a.738.738,0,0,0,.738.738h0a.738.738,0,0,0,.738-.738v-1.9h1.9a.738.738,0,0,0,.738-.738h0A.738.738,0,0,0,30.762,20.637Z" transform="translate(-3.354 -3.917)" fill="#a6abaf"/>
  </g>
</svg>
<p>Add Admin</p>
</li>
<li className='flex my-7 items-center  gap-2 text-[#606F7B] font-[Avenirregular]'>
<svg xmlns="http://www.w3.org/2000/svg" width="23.65" height="21.13" viewBox="0 0 23.65 21.13">
  <path id="Icon_awesome-paper-plane" data-name="Icon awesome-paper-plane" d="M21.99.131.578,11.164a.949.949,0,0,0,.1,1.782l4.911,1.84L18.862,4.34c.254-.2.614.107.4.342L8.131,16.792v3.322a1.13,1.13,0,0,0,1.963.652l2.933-3.189,5.756,2.154a1.13,1.13,0,0,0,1.524-.751L23.634,1.154A1.092,1.092,0,0,0,21.99.131Z" transform="translate(-0.001 0.002)" fill="#a6abaf"/>
</svg>
<p>Bulk Mail</p>
</li>
<li className='flex my-7 items-center  gap-2 text-[#606F7B] font-[Avenirregular]'>
<svg xmlns="http://www.w3.org/2000/svg" width="23.65" height="21.13" viewBox="0 0 23.65 21.13">
  <path id="Icon_ionic-ios-paper" data-name="Icon ionic-ios-paper" d="M7.7,5V21.356a.759.759,0,0,1-.8.711h0a.759.759,0,0,1-.8-.711V6.626h-.91A1.729,1.729,0,0,0,3.375,8.251V22.88a1.729,1.729,0,0,0,1.819,1.625H25.268a1.672,1.672,0,0,0,1.757-1.57V5a1.729,1.729,0,0,0-1.819-1.625l-15.8.1A1.55,1.55,0,0,0,7.7,5Zm3.752,1.625h4.775a.759.759,0,0,1,.8.711h0a.759.759,0,0,1-.8.711H11.448a.759.759,0,0,1-.8-.711h0A.759.759,0,0,1,11.448,6.626Zm0,8.127h8.414a.759.759,0,0,1,.8.711h0a.759.759,0,0,1-.8.711H11.448a.759.759,0,0,1-.8-.711h0A.759.759,0,0,1,11.448,14.753Zm11.143,5.486H11.448a.759.759,0,0,1-.8-.711h0a.759.759,0,0,1,.8-.711H22.591a.759.759,0,0,1,.8.711h0A.759.759,0,0,1,22.591,20.238Zm0-8.127H11.448a.759.759,0,0,1-.8-.711h0a.759.759,0,0,1,.8-.711H22.591a.759.759,0,0,1,.8.711h0A.759.759,0,0,1,22.591,12.111Z" transform="translate(-3.375 -3.375)" fill="#a6abaf"/>
</svg>

<p>All Permissions</p>
</li>
<li className='flex my-7 items-center  gap-2 text-[#606F7B] font-[Avenirregular]'>
<svg xmlns="http://www.w3.org/2000/svg" width="23.65" height="21.13" viewBox="0 0 23.65 21.13">
  <path id="Icon_ionic-ios-settings" data-name="Icon ionic-ios-settings" d="M26.2,15.062a2.747,2.747,0,0,1,1.952-2.536,10.178,10.178,0,0,0-1.46-3.141,3.4,3.4,0,0,1-1.238.237A3.243,3.243,0,0,1,23.3,8.829,2.51,2.51,0,0,1,22.675,5.8a12.853,12.853,0,0,0-3.511-1.3,3.183,3.183,0,0,1-5.678,0A12.894,12.894,0,0,0,9.969,5.8a2.5,2.5,0,0,1-.628,3.026,3.232,3.232,0,0,1-2.149.792,3.289,3.289,0,0,1-1.238-.237A10.4,10.4,0,0,0,4.5,12.532a2.744,2.744,0,0,1,1.952,2.536A2.749,2.749,0,0,1,4.506,17.6a10.178,10.178,0,0,0,1.46,3.141A3.387,3.387,0,0,1,7.2,20.514a3.243,3.243,0,0,1,2.149.792,2.51,2.51,0,0,1,.628,3.02,12.969,12.969,0,0,0,3.517,1.3,3.042,3.042,0,0,1,2.833-1.738,3.042,3.042,0,0,1,2.833,1.738,12.894,12.894,0,0,0,3.517-1.3,2.512,2.512,0,0,1,.628-3.02,3.22,3.22,0,0,1,2.149-.792,3.363,3.363,0,0,1,1.232.231,10.237,10.237,0,0,0,1.46-3.141A2.758,2.758,0,0,1,26.2,15.062Zm-9.817,4.4a4.685,4.685,0,0,1-4.927-4.4,4.685,4.685,0,0,1,4.927-4.4,4.685,4.685,0,0,1,4.927,4.4A4.685,4.685,0,0,1,16.38,19.458Z" transform="translate(-4.5 -4.5)" fill="#a6abaf"/>
</svg>

<p>Settings</p>
</li>
</ul>
<div className=' text-[#606F7B] font-[Avenirregular] flex  gap-2 my-7'><svg id="Group_49" data-name="Group 49" xmlns="http://www.w3.org/2000/svg" width="25.433" height="26" viewBox="0 0 25.433 26">
  <path id="Path_56" data-name="Path 56" d="M0,0H25.433V26H0Z" fill="none"/>
  <path id="Path_57" data-name="Path 57" d="M14,8.5V6.25A2.136,2.136,0,0,0,12,4H5A2.136,2.136,0,0,0,3,6.25v13.5A2.136,2.136,0,0,0,5,22h7a2.136,2.136,0,0,0,2-2.25V17.5" fill="none" stroke="#a6abaf" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
  <path id="Path_58" data-name="Path 58" d="M7,12H21L18,9m0,6,3-3" transform="translate(1.433 1)" fill="none" stroke="#a6abaf" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
</svg>
<p>Log Out</p>
</div>
</div>
    )
  }
  return (
  
   <div className=' bg-[white] flex gap-[30px]'>
   
{NavigtionBar()}

<div className='w-[500px] mt-[30px] h-[330px] rounded-[10px] bg-gradient-to-t from-[#DCDCFA] to-[#DFF7FD] p-5 font-[Avenirregular]  '>
<p>Permssion</p>

<hr className='text-[#DDDAE7] ' />
{
  allPer.map(data=>(
  // <div>{data.email}</div>
  <>

  <div className='flex p-[5px] gap-3 items-center'>
  <img src="https://st.depositphotos.com/1269204/1219/i/950/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg" class="w-[40px] h-[40px] rounded-xl" alt=""></img>
      <div>
        <h3 className='font-bold'>Vishwa</h3>
        <p className='text-[15px] text-[#606F7B]'>||| SEM </p>
      </div>
      <div className='w-[90px]'>
        <p className='text-[15px] text-[#606F7B] ' >{data.subject}</p>
        </div>
        <p className='text-[15px] text-[#606F7B] ' >{DateDiff(data.fromDate,data.toDate)}{DateDiff(data.fromDate,data.toDate)>1?"Days":"Days"}</p>
  
    <p className=" w-[100px] text-[green] flex justify-center  items-center gap-1 text-[15px] cursor-pointer"   >
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="21" viewBox="0 0 27 21">
    <rect id="Rectangle_16" data-name="Rectangle 16" width="27" height="21" rx="8" fill="#85baad"/>
    <path id="Icon_feather-check" data-name="Icon feather-check" d="M17.806,9,9.689,16.5,6,13.091" transform="translate(2.096 -2.25)" fill="none" stroke="#1a8e72" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
  </svg>
            Approve
          </p>

          <p className=" w-[100px] text-[#EA8B9E] flex justify-center  items-center gap-1 text-[15px] cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="21" viewBox="0 0 27 21" >
          <rect id="Rectangle_30" data-name="Rectangle 30" width="27" height="21" rx="8" fill="#e6bdc5"/>
          <path id="Path_28" data-name="Path 28" d="M9.506,97.712a1.092,1.092,0,0,0,0-1.481.949.949,0,0,0-1.4,0L4.861,99.676l-3.25-3.442a.949.949,0,0,0-1.4,0,1.092,1.092,0,0,0,0,1.481l3.25,3.442L.217,104.6a1.092,1.092,0,0,0,0,1.481.949.949,0,0,0,1.4,0l3.247-3.445,3.25,3.442a.949.949,0,0,0,1.4,0,1.092,1.092,0,0,0,0-1.481l-3.25-3.442Z" transform="translate(8.639 -90.657)" fill="#ea8b9e"/>
        </svg>
        Reject
        
          </p>

          </div>

    <hr className='text-[#DDDAE7] ' />
    </>
  ))

}
<button className='bg-primary text-[white] py-[5px] px-[10px] rounded-md '>View More</button>
</div>

   </div>
 

  )
}
