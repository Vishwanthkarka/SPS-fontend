import React from "react";
import Header from "./Header";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import {isAuthenticated} from "../auth/helper/index"

export default function Home() {
  const navigate = useNavigate();
const notify = () => toast.success('Here is your toast.');

  return (
    <div className="h-[100vh]">
    
{/* <lottie-player src="https://assets10.lottiefiles.com/private_files/lf30_TBKozE.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop controls autoplay></lottie-player>
    */}
    <Header/>
    <div className="flex gap-10 items-center justify-center">
   <img src="https://res-console.cloudinary.com/dfceagnv7/thumbnails/v1/image/upload/v1667889250/dW5kcmF3X3dlbGNvbWVfcmVfaDNkOV8xX2hpcDZ1aw==/drilldown" alt="" className="w-[40%]" />
   <div className="flex flex-col justify-center items-center gap-[20px]">
    <h2 className="text-[30px] text-[#6C63FF]">Welcome to the Student Permission potal</h2>
    <p>One website for all college needs</p>
    <button className="px-[20px] py-[10px] bg-primary text-[white] rounded-md" onClick={isAuthenticated()?() => navigate("/user/dashboard"):() => navigate("/signup")}>{isAuthenticated()?"welcome":"signin"} </button>
   </div>
   </div>
    <div>
      {/* <button onClick={notify}>Make me a toast</button> */}
      {/* {notify()}
      <Toaster /> */}
    </div>
     </div>
    
  );
}
