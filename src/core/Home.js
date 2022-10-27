import React from "react";
import Header from "./Header";
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {

const notify = () => toast.success('Here is your toast.');

  return (
    <div className="">
    
{/* <lottie-player src="https://assets10.lottiefiles.com/private_files/lf30_TBKozE.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop controls autoplay></lottie-player>
    */}
    <Header/>

    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>

   
     </div>
    
  );
}
