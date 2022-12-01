import React,{useEffect,useState} from 'react'
import { updateRole} from "./helper/permissioncalls"

export default function AddAdminCard(props) {
//    const [adminRole, setAdminRole] = {props.}
const [buttonClicked, setButtonCliked] = useState(false)
    useEffect(
        ()=>{
            updateRole(props.id,props.role=="Admin"?"user":"Admin").then(data=> (console.log(data))).catch(err=> console.log())

        },[buttonClicked]
)
  return (
      <div className='bg-[#6C63FF]  relative rounded-[35px] h-[200px] w-[170px] flex flex-col justify-center gap-4 items-center '>
    { props.display ? <svg className=' absolute top-5 right-4 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="16.43" height="17" viewBox="0 0 16.43 17" >
<ellipse id="Ellipse_19" data-name="Ellipse 19" cx="8.215" cy="8.5" rx="8.215" ry="8.5" fill="#b9b6f8"/>
<g id="Group_43" data-name="Group 43" transform="translate(5.06 5.051)">
<path id="Path_48" data-name="Path 48" d="M0,0H5.563V7.238H0Z" fill="none"/>
<line id="Line_14" data-name="Line 14" x1="6.809" y2="7.578" transform="translate(-0.249 -0.34)" fill="none" stroke="#808fbe" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
<line id="Line_15" data-name="Line 15" x2="6.809" y2="7.578" transform="translate(-0.249 -0.34)" fill="none" stroke="#808fbe" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  </g>
</svg>:<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus  absolute top-5 right-4 cursor-pointer " width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round" onClick={()=> setButtonCliked(!buttonClicked)}>
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="12" y1="5" x2="12" y2="19" />
  <line x1="5" y1="12" x2="19" y2="12" />
</svg>

    }         
            <img className='  w-[70px] h-[70px] rounded-[50%]' src={props.photo} alt="flower"  />
            <div>
           
            <h1 className='ml-4 -mt-2 font-semibold  text-[white]'>{props.name}</h1>
            <h3 className='text-[#ffffff9e]'>{props.section}</h3>
            </div>
      </div>
    )
  }
