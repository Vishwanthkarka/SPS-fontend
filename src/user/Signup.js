import React, { useState } from "react";
import { signup } from "../auth/helper/index";
import { Link } from "react-router-dom";
import Bg from "../assets/Signup-background.jpg";


 function SignupForm() {
  const [values,setValue] = useState({
    name:"",
    email:"",
    parentEmail:"",
    password:"",
    studentPhone:"",
    parentPhone:"",
    section:"",
    parentName:"",
    image:""
    
  })
  const { name,
  email,
  parentEmail,
  password,
  studentPhone,
  parentPhone,
  section,
  parentName,
  image
  } = values
  const inputHandler = (name) => (el)=>{
setValue({...values,[name]:el.target.value})
console.log(values)
  }
  const onSubmit = (el) =>{
el.preventDefault()
signup({email,
  parentEmail,
  password,
  studentPhone,
  parentPhone,
  section,
  parentName,
  image,
name}).then(data=> {
  if(data.error){
    setValue({...values, error :data.error,loading:false})
  }
  else{
    setValue({
      ...values,
      name:"",
      email:"",
      parentEmail:"",
      password:"",
      studentPhone:"",
      parentPhone:"",
      section:"",
      parentName:"",
      image:""
    })
  }
})

  }
  return (
    <div className=" bg-primary flex justify-end gap-10 items-center">
      <form
        action=""
        // className=" w-[450px] my-14 h-[145vh] bg-[white] rounded-[20px] px-[60px] py-[40px]"
        className="md:w-[371px] mt-9 pt-6   w-[351px] h-[1050px] bg-[white] rounded-[35px] drop-shadow-sm px-[2rem]  flex flex-col gap-[15px] "
      >
        <div className="flex gap-6 items-center">
          <div className="bg-[#E0FEE9] w-[35px] h-[35px] rounded-[30px]  flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.086"
              height="24.609"
              viewBox="0 0 21.086 24.609"
            >
              <path
                id="Icon_material-account-circle"
                data-name="Icon material-account-circle"
                d="M13.543,3C7.723,3,3,8.513,3,15.3s4.723,12.3,10.543,12.3S24.086,22.1,24.086,15.3,19.363,3,13.543,3Zm0,3.691a3.453,3.453,0,0,1,3.163,3.691,3.453,3.453,0,0,1-3.163,3.691,3.453,3.453,0,0,1-3.163-3.691A3.453,3.453,0,0,1,13.543,6.691Zm0,17.473A7.382,7.382,0,0,1,7.217,20.2c.032-2.449,4.217-3.79,6.326-3.79s6.294,1.341,6.326,3.79a7.382,7.382,0,0,1-6.326,3.962Z"
                transform="translate(-3 -3)"
                fill="#00e1b1"
              />
            </svg>
          </div>
          <h2 className="font-bold text-[1.2rem]">
            Signup the student <br /> permission Portal
          </h2>
        </div>
        <p className="py-[1px] text-sm font-bold ">Name</p>
        <input
          type="text"
          className="border-solid border-[1.5px] border-[#AEB8D9] h-[40px] w-[300px] rounded-md p-3 focus:ring-1       focus:outline-none focus:border-[#4C5EE5] focus:ring-1 focus:ring-[#4C5EE5] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:ring-[#AEB8D9] focus-visible:ring-[#AEB8D9]  invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
          placeholder="Full Name"
          onChange={inputHandler("name")}
          values={name}
        />
        <p className="mt-1 text-sm peer-invalid:visible text-red-700"> Father Name</p>
        <input
          type="text"
          className="border-solid border-[1.5px] border-[#AEB8D9] h-[40px] w-[300px] rounded-md p-3 focus:ring-1       focus:outline-none focus:border-[#4C5EE5] focus:ring-1 focus:ring-[#4C5EE5] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:ring-[#AEB8D9] focus-visible:ring-[#AEB8D9]  invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
          placeholder="ParentName"
          onChange={inputHandler("parentName")}
          value={parentName}
        />
        <p className="mt-1 text-sm"> Student Email</p>
        <input
          type="email"
          className="border-solid border-[1.5px] border-[#AEB8D9] h-[40px] w-[300px] rounded-md p-3 focus:ring-1       focus:outline-none focus:border-[#4C5EE5] focus:ring-1 focus:ring-[#4C5EE5] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:ring-[#AEB8D9] focus-visible:ring-[#AEB8D9]  invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
          placeholder="email@address.com"
          onChange={inputHandler("email")}
          name = {email}
        />
        <p className="mt-1 text-sm"> Parent Email</p>
        <input
          type="email"
          className="border-solid border-[1.5px] border-[#AEB8D9] h-[40px] w-[300px] rounded-md p-3 focus:ring-1       focus:outline-none focus:border-[#4C5EE5] focus:ring-1 focus:ring-[#4C5EE5] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:ring-[#AEB8D9] focus-visible:ring-[#AEB8D9]  invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
          placeholder="email@address.com"
          onChange={inputHandler("parentEmail")}
          value={parentEmail}
        />

        <p className="mt-1 text-sm">Password</p>
        <input
          type="password"
          className="border-solid border-[1.5px] border-[#AEB8D9] h-[40px] w-[300px] rounded-md p-3 focus:ring-1       focus:outline-none focus:border-[#4C5EE5] focus:ring-1 focus:ring-[#4C5EE5] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:ring-[#AEB8D9] focus-visible:ring-[#AEB8D9]  invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
          placeholder="*****************"
          onChange={inputHandler("password")}
          value={password}
        />
        <p className="mt-1 text-sm">Name</p>
        <select
          name=""
          className="border-solid border-[1.5px] border-[#AEB8D9] h-[40px] w-[300px] rounded-md p-3 focus:ring-1       focus:outline-none focus:border-[#4C5EE5] focus:ring-1 focus:ring-[#4C5EE5] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:ring-[#AEB8D9] focus-visible:ring-[#AEB8D9]  invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
          id=""
          onChange={inputHandler("section")}
          value={section}

        >
          <option value="CSE">CSE</option>
          <option value="CSE-AIML">CSE-AIML</option>
          <option value="CSE-DS">CSE-DS</option>
          <option value="CSE-CS">CSE-CS</option>
          <option value="EEE">EEE</option>
          <option value="ECE">ECE</option>
        </select>
        <p className="mt-1 text-sm"> Student Phone Number</p>
        <input
          type="number"
          maxlength="10"
          className="border-solid border-[1.5px] border-[#AEB8D9] h-[40px] w-[300px] rounded-md p-3 focus:ring-1       focus:outline-none focus:border-[#4C5EE5] focus:ring-1 focus:ring-[#4C5EE5] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:ring-[#AEB8D9] focus-visible:ring-[#AEB8D9]  invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
          placeholder="99999 99999"
          onChange={inputHandler("studentPhone")}
          value={studentPhone}
        />
        <p className="mt-1 text-sm"> Parent Phone Number</p>
        <input
          type="number"
          maxlength="10"
          className="border-solid border-[1.5px] border-[#AEB8D9] h-[40px] w-[300px] rounded-md p-3 focus:ring-1       focus:outline-none focus:border-[#4C5EE5] focus:ring-1 focus:ring-[#4C5EE5] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:ring-[#AEB8D9] focus-visible:ring-[#AEB8D9]  invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
          placeholder="99999 99999"
          onChange={inputHandler("parentPhone")}
      
          value={parentPhone}
        />
        <p className="mt-1 text-sm"> Photo of Student</p>
        <input type="file" className="mt-2 block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100" 
      value= {image} 
      onChange={inputHandler("image")} />
        <button type="submit" onClick={onSubmit} className=" px-5 py-1  my-5 rounded-[15px] bg-primary text-[white] ">Submit</button>

      </form>
       
    </div>
  );
}
export default SignupForm