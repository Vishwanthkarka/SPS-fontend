import React from 'react';
import PermssionCard from './PermssionCard';

const UserDashBoard = () => {
    return (
        <>
        <div className='p-[10px]'>
         <button className='bg-primary text-[white] px-2 py-1 rounded-md  block'>+ New</button>
       
          <div className='flex justify-between text-[#606F7B]  font-[Avenir-regular] md:px-[5rem] py-3 text-center'>
            <p className=' md:w-[200px]'>Permission</p>
            <p className=''>Tag</p>
            <p className=''>Duration</p>
            <p className=' w-[100px]'>Status</p>
            <p className=''>Actions</p>
          </div>
          <hr className='text-[#dae1e7]'/>
       <PermssionCard/>
       <PermssionCard/>
       <PermssionCard/>
       <PermssionCard/>
       <PermssionCard/>
        </div>
        </>
    );
}

export default UserDashBoard;
