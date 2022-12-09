import React, { useState,useEffect } from "react";
import PermssionCard from "./PermssionCard";
import { Navigate } from "react-router-dom";
// import PermssionForm from "./PermssionForm";
import {GetPermissions} from "./helper/permissioncalls"
import { isAuthenticated } from "../auth/helper";
import { AddPermision } from "../user/helper/permissioncalls";
import Header from "../core/Header";
import  moment from "moment"

const UserDashBoard = () => {
  const [values, setValues] = useState({
    subject: "",
    fromDate: null,
    toDate: null,
    description: null,
    error: "",
    loading: false,
    email: null,
    tag:null,
    name:isAuthenticated().user._id,
  });
  
  const data = localStorage.getItem("jwt");
  const [newRequest, setNewRequest] = useState(false);
  const [allRequests, setAllRequests] = useState([])
  console.log("####",isAuthenticated().token)
    
  const { subject, fromDate, toDate, description, email,tag, name } = values;
  
 

  console.log(allRequests)
  useEffect(() => {
    
    GetPermissions(isAuthenticated().user.email,isAuthenticated().token,isAuthenticated().user.role).then(data=>(setAllRequests(data.permissionData)))
    console.log(allRequests)
  },[newRequest]);
  console.log(allRequests)

  const onSubmit = (el) => {
    // el.preventDefault();
    let userData =  JSON.parse(data)
console.log("%%%%%%%%%%",values)

    setValues({ ...values, error: "" , email:userData["user"]["email"], loading: true });
console.log(values)
    AddPermision({ subject, fromDate, toDate, description, email,tag, name:isAuthenticated().user._id },isAuthenticated().user.email,isAuthenticated().token,isAuthenticated().user.role)
      .then((data) => {
        setValues({
          subject: "",
          fromDate: "",
          toDate: "",
          description: "",
          error: "",
          loading: "",
          tag:"",
          name:isAuthenticated().user._id
        });


  
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

      console.log("hellodoodoeoe",values)
  };
  const inputHandler = (name) => (el) => {


    let userData =  JSON.parse(data)
if(userData["user"]["email"] == null){
  return <Navigate to="/"  replace={true}/>
}
else{
    setValues({ ...values, [name]: el.target.value, email:userData["user"]["email"], error: "" });
    console.log(values);

    // console.log(data["token"]);
    console.log(data);
}
  };
  
 function PermssionForm() {
  

  
    //   const inputHandler =  (name) => (el) => {
    // // setValues({...values,[name]:el.target.value})
  
    // // console.log(values)
    //   }
  
  

    return (
      <>
       <div className=" h-[100%]  w-[100%] absolute flex justify-center items-center  flex-col  " >
            <div className=" h-[140vh] w-[100%] bg-[#020202a7] cursor-pointer  absolute" onClick={()=>setNewRequest(!newRequest)}>  </div>
            <div className="flex gap-[130px] items-center  " >
            
            </div>
        <form
          action=""
          // className=" w-[450px] my-14 h-[145vh] bg-[white] rounded-[20px] px-[60px] py-[40px]"
          className="md:w-[371px]  pt-6   w-[351px] h-[720px] bg-[white] shadow-md rounded-[35px] drop-shadow-sm px-[2rem]  flex flex-col gap-[15px] "
        >
          <div className="flex gap-6 items-center">
            <div className="bg-[#E0FEE9] w-[35px] h-[35px] rounded-[30px]  flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
              >
                <circle
                  id="Ellipse_7"
                  data-name="Ellipse 7"
                  cx="13"
                  cy="13"
                  r="13"
                  fill="#e0fee9"
                />
                <g
                  id="Group_17"
                  data-name="Group 17"
                  transform="translate(2 3.462)"
                >
                  <path
                    id="Path_37"
                    data-name="Path 37"
                    d="M0,0H23.355V19.9H0Z"
                    fill="none"
                  />
                  <rect
                    id="Rectangle_35"
                    data-name="Rectangle 35"
                    width="17.008"
                    height="11.82"
                    rx="3"
                    transform="translate(3 4)"
                    fill="none"
                    stroke="#5ada7f"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  />
                  <circle
                    id="Ellipse_6"
                    data-name="Ellipse 6"
                    cx="2"
                    cy="2"
                    r="2"
                    transform="translate(6.33 5.933)"
                    fill="none"
                    stroke="#5ada7f"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  />
                  <line
                    id="Line_8"
                    data-name="Line 8"
                    x2="2"
                    transform="translate(14.693 6.937)"
                    fill="none"
                    stroke="#5ada7f"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  />
                  <line
                    id="Line_9"
                    data-name="Line 9"
                    x2="2"
                    transform="translate(14.693 9.91)"
                    fill="none"
                    stroke="#5ada7f"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  />
                  <line
                    id="Line_10"
                    data-name="Line 10"
                    x2="10"
                    transform="translate(6.49 12.884)"
                    fill="none"
                    stroke="#5ada7f"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  />
                </g>
              </svg>
            </div>
            <h2 className="font-bold text-[1.2rem]">Permission</h2>
          </div>
          <p className="text-[#A6ABAF] font-[Avenirregular]">
            Add your permission request — Get the permission faster than the leave
            letter{" "}
          </p>
          <hr className="text-[#D5D8D9]"></hr>
          <p className="py-[1px] text-sm font-bold ">Subject</p>
          <input
            type="text"
            className="border-solid border-[1.5px]  border-[#AEB8D9] h-[40px] w-[300px] rounded-md p-3 focus:ring-1   font-[Avenirregular]    focus:outline-none focus:border-[#4C5EE5] focus:ring-1 focus:ring-[#4C5EE5] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:ring-[#AEB8D9] focus-visible:ring-[#AEB8D9]  invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
            placeholder="Ex: Hackathon"
            onChange={inputHandler("subject")}
            value={subject}
          />
          <p className="mt-1 text-sm peer-invalid:visible text-red-700">From</p>
          <input
            type="date"
            className="border-solid border-[1.5px]  h-[45px] w-[300px]   rounded-md p-3 focus:ring-1  font-[Avenirregular]     focus:outline-none focus:border-[#4C5EE5] focus:ring-1 focus:ring-[#4C5EE5] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:ring-[#AEB8D9] focus-visible:ring-[#AEB8D9]  invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
            placeholder="Leave from"
            onChange={inputHandler("fromDate")}
            value={fromDate}
          />
          <p className="mt-1 text-sm"> To</p>
          <input
            type="date"
            className="border-solid border-[1.5px]  h-[45px] border-[#AEB8D9]   w-[300px] rounded-md p-3 focus:ring-1   font-[Avenirregular]    focus:outline-none focus:border-[#4C5EE5] focus:ring-1 focus:ring-[#4C5EE5] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:ring-[#AEB8D9] focus-visible:ring-[#AEB8D9]  invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
            onChange={inputHandler("toDate")}
            value={toDate}
          />
          <p className="mt-1 text-sm"> Tag</p>
          <select name="tag" id="" onChange={inputHandler("tag")} value={tag} className="border-solid border-[1.5px]  h-[41px] border-[#AEB8D9]   w-[300px] rounded-md p-3 focus:ring-1   font-[Avenirregular]    focus:outline-none focus:border-[#4C5EE5] focus:ring-1 focus:ring-[#4C5EE5] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:ring-[#AEB8D9] focus-visible:ring-[#AEB8D9]  invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500">
          <option value="" selected disabled hidden>Choose here</option>
            <option value="EVENT">EVENT</option>
            <option value="PROGRAMS">PROGRAMS</option>
            <option value="HACKATHON">HACKATHON</option>
            <option value="HEALTH_ISSUE">HEALTH ISSUE</option>
            
          

          </select>
          <p className="mt-1 text-sm"> Description</p>
          <textarea
            row="5"
            cols="900"
            className=" border-[1.5px] border-[#AEB8D9]   font-[Avenirregular] rounded-md p-3"
            onChange={inputHandler("description")}
            value={description}
          ></textarea>
          <button
            type="submit"
            className=" px-5 py-1  my-5 rounded-[15px] bg-primary text-[white] "
            onClick={ ()=> { setNewRequest(!newRequest); onSubmit()}}
          >
            Submit
          </button>
        </form>
        </div>
      </>
    );


  }
  return (
    <>
    <Header/>
      {newRequest ? (   
         PermssionForm()
      ) : (
        " "
      )}
      <div className="p-[10px]">
        <button
          className="bg-primary text-[white] px-2 py-1 rounded-md  block"
          onClick={() => setNewRequest(!newRequest)}
        >
          + New
        </button>

        <div className="flex justify-between text-[#606F7B]  font-[Avenir-regular] md:px-[5rem] py-3 text-center">
          <p className=" md:w-[200px]">Permission</p>
          <p className="">Tag</p>
          <p className="">Duration</p>
          <p className=" w-[100px]">Status</p>
          <p className="">Actions</p>
        </div>
        <hr className="text-[#dae1e7]" />
        <ul>
{ 


// All permission  list
allRequests.map(element => (
  <PermssionCard subject={element.subject} tag={element.tag} description
= {element.description}  isApproved ={element.is_PermisssionGranted} from={element.fromDate} id={element._id}  to ={element.toDate} />
))
}
</ul>  
      </div>
    </>
  );
}
 


export default UserDashBoard;
