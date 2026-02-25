import React from 'react'
import { TbXboxXFilled } from "react-icons/tb";


const MobileNav = ({mobileactive,setmobileactive}) => {
  return (
    <div className={`flex flex-col fixed inset-0 z-50 bg-gray-200  h-[30vh] w-[25vh] m-auto rounded-xl transition-transform duration-300  p-3 ${mobileactive ? 'translate-x-0':'translate-x-500'}`} >
       <div>
         <button className='text-[22px] active:scale-95  float-end' onClick={()=>{
            setmobileactive(false)
        }}><TbXboxXFilled /></button>
       </div>
        <div className='flex flex-col gap-4 text-[15px] justify-center text-center items-center mt-5'>
              <h2>Home</h2>
              <h2>About us</h2>
              <h2>Services</h2>
              <h2>Contact us</h2>
            </div>
    </div>
  )
}

export default MobileNav
