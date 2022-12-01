import React,{useState,useEffect} from "react";
import {GetAdmin,GetNoneAdmin, updateRole} from "./helper/permissioncalls"
import AddAdminCard from "./AddAdminCard";

function AddAdmin() {
  const [adminList, setAdminList] = useState([])
  const [userList, setUserList] = useState([])
  const [onClickAdd,setOnClickAdd] = useState(false)
  useEffect(() => {
    GetAdmin().then(user=> (user.users!=="" ?setAdminList(user.users):"")).catch(err=> console.log(err))
  }, []);
  
  useEffect(() => {
    GetNoneAdmin().then(user=> (user.users!=="" ?setUserList(user.users):"")).catch(err=> console.log(err))
    // updateRole().then(data=> ())
  }, [onClickAdd]);
 console.log(adminList)
  function AdminCard (photo,name,section,display){
    return(
      <div className='bg-[#6C63FF]  relative rounded-[35px] h-[200px] w-[170px] flex flex-col justify-center gap-4 items-center '>
    { display ? <svg className=' absolute top-5 right-4 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="16.43" height="17" viewBox="0 0 16.43 17">
<ellipse id="Ellipse_19" data-name="Ellipse 19" cx="8.215" cy="8.5" rx="8.215" ry="8.5" fill="#b9b6f8"/>
<g id="Group_43" data-name="Group 43" transform="translate(5.06 5.051)">
<path id="Path_48" data-name="Path 48" d="M0,0H5.563V7.238H0Z" fill="none"/>
<line id="Line_14" data-name="Line 14" x1="6.809" y2="7.578" transform="translate(-0.249 -0.34)" fill="none" stroke="#808fbe" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
<line id="Line_15" data-name="Line 15" x2="6.809" y2="7.578" transform="translate(-0.249 -0.34)" fill="none" stroke="#808fbe" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  </g>
</svg>:<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus  absolute top-5 right-4 cursor-pointer " width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="5" x2="12" y2="19" />
  <line x1="5" y1="12" x2="19" y2="12" />
</svg>

    }         
            <img className='  w-[70px] h-[70px] rounded-[50%]' src={photo} alt="flower"  />
            <div>
           
            <h1 className='ml-4 -mt-2 font-semibold  text-[white]'>{name}</h1>
            <h3 className='text-[#ffffff9e]'>{section}</h3>
            </div>
      </div>
    )
  }
    function ListOfAdmin (){
        return (
         
            
            <div className='flex m-12 gap-10  bg-blac text-white flex-wrap '>
                 
                 <div className='bg-[#6b63ffb3]  hover:bg-blue-300 h-[200px] w-[170px]  rounded-[35px] flex flex-col items-center justify-center gap-3  cursor-pointer  flex-wrap ' onClick={()=>setOnClickAdd(!onClickAdd)}>
                        
                              <h1 className=' font-semibold text-[white] '>Add Admin</h1>
 
                 </div>
                {
                adminList.map(us=> (
                  // AdminCard(us.photo.secure_url,us.name,us.section,true)
                  <AddAdminCard id = {us._id} photo = {us.photo.secure_url} name={us.name}section ={us.section} display={true} role = {us.role
                  } />
                ))
                
       
 
}
                
             </div>
        
        )
    }
    
    function ListOfUsers(){
      return (
       
          <div>

          <div className='pl-8 mt-8 flex items-center gap-4  '>
            
          <svg className='' xmlns="http://www.w3.org/2000/svg" width="28.171" height="26.589" viewBox="0 0 22.171 20.589" onClick={()=>setOnClickAdd(!onClickAdd)}>
           <path id="Icon_awesome-arrow-left" data-name="Icon -arrow-left" d="M12.741,21.857l-1.1,1.047a1.224,1.224,0,0,1-1.677,0L.345,13.743a1.09,1.09,0,0,1,0-1.6L9.965,2.98a1.224,1.224,0,0,1,1.677,0l1.1,1.047a1.1,1.1,0,0,1-.02,1.617L6.758,11.056H20.98a1.158,1.158,0,0,1,1.188,1.132V13.7a1.158,1.158,0,0,1-1.188,1.132H6.758l5.963,5.412A1.088,1.088,0,0,1,12.741,21.857Z" transform="translate(0.004 -2.647)" fill="#9590ea"/>
           </svg>
        <h1 className='text-[#6b63ffc8] font-semibold text-xl  '>Admin Management</h1>
        
       </div>
       

          <div className='flex m-12 gap-10  bg-blac text-white flex-wrap '>
               
            
              {
              userList.map(us=> (
                // AdminCard(us.photo.secure_url,us.name,us.section,false)
                <AddAdminCard id = {us._id} photo = {us.photo.secure_url} name={us.name}section ={us.section} display={false} />
              ))
              
     

}
              
           </div>
           </div>
      )
  }
  return (
    
     <div>
      <div className='h-[100vh] flex items-center justify-center bg-[#EAEBF5] '>
         <div className='bg-[#ffffff] w-[800px] h-[600px]   rounded-3xl '>
              
               {onClickAdd? ListOfUsers():ListOfAdmin()}
         </div>
        
     </div>
    
  
     </div>
    
     
  );
}

export default AddAdmin;
