import React from 'react';
import iconA from '../../../assets/assets/icons/001-timetable.svg'
import iconB from '../../../assets/assets/icons/Group 34.svg'
import iconC from '../../../assets/assets/icons/Group 35.svg'

const MoreServices = () => {
    return (
        <div className=' text-center mt-7 mb-5 gap-10 justify-center ' >
            <button className='btn  btn-outline btn-error'>More Services</button>
         <div className='flex ml-20 mt-4 p-12 '>
         <div className='flex items-center  bg-black p-8 '>
          
          <img src={iconA} alt="" />
      
      <div  className='' >
        <p className='font-bold text-white text-xl'>We are open monday-friday</p>
        <p className='text-2xl font-bold text-white'>7:00 am - 9:00 pm</p>
      </div>
    </div>
         <div className='flex items-center  bg-black p-8 '>
          
          <img src={iconB} alt="" />
      
      <div  className='' >
        <p className='font-bold text-white text-xl'>Have a question?</p>
        <p className='text-2xl font-bold text-white'>+2546 251 2658</p>
      </div>
    </div>
         <div className='flex items-center  bg-black p-8 '>
          
          <img src={iconC} alt="" />
      
      <div  className='' >
        <p className='font-bold text-white text-xl'>Need a repair? our address</p>
        <p className='text-2xl font-bold text-white'>Liza Street, New York</p>
      </div>
    </div>
         </div>
        </div>
    );
};

export default MoreServices;