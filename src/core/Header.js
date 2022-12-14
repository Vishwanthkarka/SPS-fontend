import React,{useState} from "react";
// import { Navigate,Routes } from "react-router-dom";
import hel from "./logostudent.png";
import "./headerStyle.css";
import { useNavigate } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper";



function Header() {
  const navigate = useNavigate();
  const[islogin, SetIsLogin] = useState(isAuthenticated()== false?false:true)
  console.log(islogin)
  // const history = createBrowserHistory();

  function isCheck  (){
   return islogin ? HeaderLogin() : HeaderNotLogin()
  }
  function HeaderNotLogin() {
    const navigate = useNavigate();
    return (
      <ul className="flex  ml-auto items-center gap-9">
        <li className="text-primary cursor-pointer" onClick={ () => navigate("/signup")} >
       
          login
        </li>
        <li className=" bg-primary px-[6px] py-[3px]  rounded-[9px] cursor-pointer text-[white] font-semibold" onClick={ () => navigate("/signup")} >
          {" "}
          signup
        </li>
      </ul>
    );
  }

  function HeaderLogin() {
   console.log(isAuthenticated().user.photo.secure_url)
   console.log(islogin)
    return (
      <>
        <div className="relative onHover p-5 ">
          <div className="flex  justify-center items-center gap-[12px] cursor-pointer">
            <img className=" w-10 h-10 rounded-full bg-[green]  "  src={isAuthenticated().user.photo.secure_url?isAuthenticated().user.photo.secure_url:"https://undraw.co/favicon.ico"} /> 
            <svg
              width="11"
              height="6"
              viewBox="0 0 11 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mt-1"
            >
              <path
                d="M2.03243 0.261745L5.50447 3.73379L8.97651 0.261745C9.3255 -0.0872484 9.88926 -0.0872484 10.2383 0.261745C10.5872 0.610739 10.5872 1.1745 10.2383 1.52349L6.13087 5.63088C5.78187 5.97987 5.21811 5.97987 4.86912 5.63088L0.761732 1.52349C0.594168 1.3563 0.5 1.12932 0.5 0.892619C0.5 0.655913 0.594168 0.428933 0.761732 0.261745C1.11073 -0.0782999 1.68343 -0.0872484 2.03243 0.261745Z"
                fill="#B8C2CC"
              ></path>
            </svg>
          </div>
  
          <div className=" show-hover onHover  rounded-md h-[30px]   right-[2px]  absolute m-2 w-full md:w-64 md:bg-white md:rounded-xl md:shadow-sm ">
            <div className="  bg-[white]  shadow-xl rounded-xl">
              <div className="h-[88px] flex bg-[white]  p-4 rounded-tl-md rounded-tr-md">
                <img
                  src={isAuthenticated().user.photo.secure_url?isAuthenticated().user.photo.secure_url:"https://undraw.co/favicon.ico"}
                  className="mr-3 w-12 h-12 rounded-full flex-no-shrink"
                  alt=""
                />
                <div>
                  <h3 className="text-[#3d4852]">{isAuthenticated().user.name}</h3>
                  <p className="font-[Avenirregular] text-primary cursor-pointer">
                    View Profile
                  </p>
                </div>
              </div>
  
              <ul className="">
                <li className="font-[Avenirregular]  px-4 py-2 flex   cursor-pointer items-center gap-2 hover:bg-[#6b63ff29] ">
                  <img
                    src="https://static5.lottiefiles.com/images/v3/dashboard-icons/dashboard.svg"
                    alt="My Dashboard"
                    className="inline "
                  />
                  <p>My Dashboard </p>{" "}
                </li>
                <li className="font-[Avenirregular]  px-4 py-2 flex  cursor-pointer items-center gap-2 hover:bg-[#6b63ff29] ">
                  <svg
                    id="Group_5"
                    data-name="Group 5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      id="Path_13"
                      data-name="Path 13"
                      d="M0,0H24V24H0Z"
                      fill="none"
                    />
                    <path
                      id="Path_14"
                      data-name="Path 14"
                      d="M21,14l-3-3H11a1,1,0,0,1-1-1V4a1,1,0,0,1,1-1h9a1,1,0,0,1,1,1V14"
                      fill="none"
                      stroke="#606f7b"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <path
                      id="Path_15"
                      data-name="Path 15"
                      d="M14,15v2a1,1,0,0,1-1,1H6L3,21V11a1,1,0,0,1,1-1H6"
                      fill="none"
                      stroke="#606f7b"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                  </svg>
                  <p>Request Permission </p>{" "}
                </li>
                <li className="font-[Avenirregular]  px-4 py-2 flex  cursor-pointer  items-center gap-2 hover:bg-[#6b63ff29] ">
                  <svg
                    id="Group_6"
                    data-name="Group 6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      id="Path_16"
                      data-name="Path 16"
                      d="M0,0H24V24H0Z"
                      fill="none"
                    />
                    <line
                      id="Line_1"
                      data-name="Line 1"
                      y1="11"
                      x2="11"
                      transform="translate(10 3)"
                      fill="none"
                      stroke="#606f7b"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <path
                      id="Path_17"
                      data-name="Path 17"
                      d="M21,3,14.5,21a.55.55,0,0,1-1,0L10,14,3,10.5a.55.55,0,0,1,0-1L21,3"
                      fill="none"
                      stroke="#606f7b"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                  </svg>
                  <p>Add Complain </p>{" "}
                </li>
                <hr className="text-[#DAE1E7]" />
                <li className="font-[Avenirregular]  px-4 py-2 flex   cursor-pointer items-center gap-2 hover:bg-[#6b63ff29] ">
                  <svg
                    id="Group_2"
                    data-name="Group 2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      id="Path_5"
                      data-name="Path 5"
                      d="M0,0H24V24H0Z"
                      fill="none"
                    />
                    <path
                      id="Path_6"
                      data-name="Path 6"
                      d="M10.325,4.317a1.724,1.724,0,0,1,3.35,0,1.724,1.724,0,0,0,2.573,1.066,1.725,1.725,0,0,1,2.37,2.37,1.724,1.724,0,0,0,1.065,2.572,1.724,1.724,0,0,1,0,3.35,1.724,1.724,0,0,0-1.066,2.573,1.725,1.725,0,0,1-2.37,2.37,1.724,1.724,0,0,0-2.572,1.065,1.724,1.724,0,0,1-3.35,0,1.724,1.724,0,0,0-2.573-1.066,1.725,1.725,0,0,1-2.37-2.37,1.724,1.724,0,0,0-1.065-2.572,1.724,1.724,0,0,1,0-3.35A1.724,1.724,0,0,0,5.383,7.752a1.725,1.725,0,0,1,2.37-2.37,1.723,1.723,0,0,0,2.572-1.065Z"
                      fill="none"
                      stroke="#606f7b"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <circle
                      id="Ellipse_3"
                      data-name="Ellipse 3"
                      cx="3"
                      cy="3"
                      r="3"
                      transform="translate(9 9)"
                      fill="none"
                      stroke="#606f7b"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                  </svg>
                  <p>Settings </p>{" "}
                </li>
                <li className="font-[Avenirregular] rounded-b-xl  px-4 py-2 flex  items-center gap-2 hover:bg-[#6b63ff29] cursor-pointer " onClick={()=> { SetIsLogin(!islogin);isCheck()} }>
                  <svg
                    id="Group_4"
                    data-name="Group 4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      id="Path_10"
                      data-name="Path 10"
                      d="M0,0H24V24H0Z"
                      fill="none"
                    />
                    <path
                      id="Path_11"
                      data-name="Path 11"
                      d="M14,8V6a2,2,0,0,0-2-2H5A2,2,0,0,0,3,6V18a2,2,0,0,0,2,2h7a2,2,0,0,0,2-2V16"
                      fill="none"
                      stroke="#606f7b"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <path
                      id="Path_12"
                      data-name="Path 12"
                      d="M7,12H21L18,9m0,6,3-3"
                      fill="none"
                      stroke="#606f7b"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                  </svg>
                  <p onClick={()=>    console.log(islogin)}>Logout</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
  

  return (
    <div className="flex  h-[8vh] justify-between items-center lg:p-[40px] bg-[]">
      <div className="w-[16rem]">
        <img src={hel} className=" " />
      </div>
      {/* {HeaderLogin()} */}
     {
      isAuthenticated()&&     (   <div className="relative onHover p-5 ">
      <div className="flex  justify-center items-center gap-[12px] cursor-pointer">
        <img className=" w-10 h-10 rounded-full bg-[green]  "  src={isAuthenticated().user.photo.secure_url?isAuthenticated().user.photo.secure_url:"https://undraw.co/favicon.ico"} /> 
        <svg
          width="11"
          height="6"
          viewBox="0 0 11 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="mt-1"
        >
          <path
            d="M2.03243 0.261745L5.50447 3.73379L8.97651 0.261745C9.3255 -0.0872484 9.88926 -0.0872484 10.2383 0.261745C10.5872 0.610739 10.5872 1.1745 10.2383 1.52349L6.13087 5.63088C5.78187 5.97987 5.21811 5.97987 4.86912 5.63088L0.761732 1.52349C0.594168 1.3563 0.5 1.12932 0.5 0.892619C0.5 0.655913 0.594168 0.428933 0.761732 0.261745C1.11073 -0.0782999 1.68343 -0.0872484 2.03243 0.261745Z"
            fill="#B8C2CC"
          ></path>
        </svg>
      </div>

      <div className=" show-hover onHover  rounded-md h-[30px]   right-[2px]  absolute m-2 w-full md:w-64 md:bg-white md:rounded-xl md:shadow-sm ">
        <div className="  bg-[white]  shadow-xl rounded-xl">
          <div className="h-[88px] flex bg-[white]  p-4 rounded-tl-md rounded-tr-md">
            <img
              src={isAuthenticated().user.photo.secure_url?isAuthenticated().user.photo.secure_url:"https://undraw.co/favicon.ico"}
              className="mr-3 w-12 h-12 rounded-full flex-no-shrink"
              alt=""
            />
            <div>
              <h3 className="text-[#3d4852]">{isAuthenticated().user.name}</h3>
              <p className="font-[Avenirregular] text-primary cursor-pointer">
                View Profile
              </p>
            </div>
          </div>

          <ul className="">
            <li className="font-[Avenirregular]  px-4 py-2 flex   cursor-pointer items-center gap-2 hover:bg-[#6b63ff29] " onClick={()=> isAuthenticated().user.role == "Admin"?navigate("/admin/dashboard"):navigate("/user/dashboard")}>
              <img
                src="https://static5.lottiefiles.com/images/v3/dashboard-icons/dashboard.svg"
                alt="My Dashboard"
                className="inline "
              />
              <p>My Dashboard </p>{" "}
            </li>
            <li className="font-[Avenirregular]  px-4 py-2 flex  cursor-pointer items-center gap-2 hover:bg-[#6b63ff29] " onClick={()=>isAuthenticated().user.role == "Admin"?navigate("/admin/dashboard"):navigate("/user/dashboard")}>
              <svg
                id="Group_5"
                data-name="Group 5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  id="Path_13"
                  data-name="Path 13"
                  d="M0,0H24V24H0Z"
                  fill="none"
                />
                <path
                  id="Path_14"
                  data-name="Path 14"
                  d="M21,14l-3-3H11a1,1,0,0,1-1-1V4a1,1,0,0,1,1-1h9a1,1,0,0,1,1,1V14"
                  fill="none"
                  stroke="#606f7b"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
                <path
                  id="Path_15"
                  data-name="Path 15"
                  d="M14,15v2a1,1,0,0,1-1,1H6L3,21V11a1,1,0,0,1,1-1H6"
                  fill="none"
                  stroke="#606f7b"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
              </svg>
              {isAuthenticated().user.role == "user"?<p>Request Permission </p>:<p>All Permissions </p>}
            </li>
            <li className="font-[Avenirregular]  px-4 py-2 flex  cursor-pointer  items-center gap-2 hover:bg-[#6b63ff29] ">
              <svg
                id="Group_6"
                data-name="Group 6"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  id="Path_16"
                  data-name="Path 16"
                  d="M0,0H24V24H0Z"
                  fill="none"
                />
                <line
                  id="Line_1"
                  data-name="Line 1"
                  y1="11"
                  x2="11"
                  transform="translate(10 3)"
                  fill="none"
                  stroke="#606f7b"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
                <path
                  id="Path_17"
                  data-name="Path 17"
                  d="M21,3,14.5,21a.55.55,0,0,1-1,0L10,14,3,10.5a.55.55,0,0,1,0-1L21,3"
                  fill="none"
                  stroke="#606f7b"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
              </svg>
              <p>Add Complain </p>{" "}
            </li>
            <hr className="text-[#DAE1E7]" />
            <li className="font-[Avenirregular]  px-4 py-2 flex   cursor-pointer items-center gap-2 hover:bg-[#6b63ff29] ">
              <svg
                id="Group_2"
                data-name="Group 2"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  id="Path_5"
                  data-name="Path 5"
                  d="M0,0H24V24H0Z"
                  fill="none"
                />
                <path
                  id="Path_6"
                  data-name="Path 6"
                  d="M10.325,4.317a1.724,1.724,0,0,1,3.35,0,1.724,1.724,0,0,0,2.573,1.066,1.725,1.725,0,0,1,2.37,2.37,1.724,1.724,0,0,0,1.065,2.572,1.724,1.724,0,0,1,0,3.35,1.724,1.724,0,0,0-1.066,2.573,1.725,1.725,0,0,1-2.37,2.37,1.724,1.724,0,0,0-2.572,1.065,1.724,1.724,0,0,1-3.35,0,1.724,1.724,0,0,0-2.573-1.066,1.725,1.725,0,0,1-2.37-2.37,1.724,1.724,0,0,0-1.065-2.572,1.724,1.724,0,0,1,0-3.35A1.724,1.724,0,0,0,5.383,7.752a1.725,1.725,0,0,1,2.37-2.37,1.723,1.723,0,0,0,2.572-1.065Z"
                  fill="none"
                  stroke="#606f7b"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
                <circle
                  id="Ellipse_3"
                  data-name="Ellipse 3"
                  cx="3"
                  cy="3"
                  r="3"
                  transform="translate(9 9)"
                  fill="none"
                  stroke="#606f7b"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
              </svg>
              <p>Settings </p>{" "}
            </li>
            <li className="font-[Avenirregular] rounded-b-xl  px-4 py-2 flex  items-center gap-2 hover:bg-[#6b63ff29] cursor-pointer " onClick={()=> {signout(() => {
                navigate("/") // history.push("/");
              })} }>
              <svg
                id="Group_4"
                data-name="Group 4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  id="Path_10"
                  data-name="Path 10"
                  d="M0,0H24V24H0Z"
                  fill="none"
                />
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M14,8V6a2,2,0,0,0-2-2H5A2,2,0,0,0,3,6V18a2,2,0,0,0,2,2h7a2,2,0,0,0,2-2V16"
                  fill="none"
                  stroke="#606f7b"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
                <path
                  id="Path_12"
                  data-name="Path 12"
                  d="M7,12H21L18,9m0,6,3-3"
                  fill="none"
                  stroke="#606f7b"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                />
              </svg>
              <p >Logout</p>
            </li>
          </ul>
        </div>
      </div>
    </div>)
     }
     {
      !isAuthenticated() && (
        <ul className="flex  ml-auto items-center gap-9">
        <li className="text-primary cursor-pointer" onClick={ () => navigate("/signin")} >
       
          login
        </li>
        <li className=" bg-primary px-[6px] py-[3px]  rounded-[9px] cursor-pointer text-[white] font-semibold" onClick={ () => navigate("/signup")} >
          {" "}
          signup
        </li>
      </ul>
      )
     }
    </div>
  );
}
export default Header;
