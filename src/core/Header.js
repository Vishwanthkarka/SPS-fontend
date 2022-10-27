import React from 'react'
import hel from "./logostudent.png"
function HeaderNotLogin () {
  return(

 <ul className='flex  ml-auto items-center gap-9'>
                <li className='text-primary cursor-pointer'> login</li>
                <li className=' bg-primary px-[6px] py-[3px]  rounded-[10px] cursor-pointer text-[white] font-semibold'> signup</li>
                
               
            </ul>

  )
}
function HeaderLogin(){
return(
  <div>
<div className='w-8 h-8 rounded-[30px] bg-[green] cursor-pointer'></div>
<div className='shadow-[red] w-10'>

</div>
  </div>
)
}
function Header() {
  return (
    <div className='flex h-[8vh] justify-between items-center p-[40px] bg-[]'>
        <div className='w-[16rem]'>
            <img src ={hel} className=" " />
            </div>
           {HeaderLogin()}
    </div>
  )
}
export default Header
