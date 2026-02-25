import React from 'react'
import { IoBagHandleSharp } from "react-icons/io5";
import { FaBars, FaSearch, FaShoppingBag } from "react-icons/fa";


const Navbar = ({ cart, setactivepanel, handlesearch, setsearchterm, isscrolled, mobileactive, setmobileactive, cartquantity }) => {
  return (
    <header className={` fixed left-0 right-0 top-0 h-fit w-full shadow-xl  z-40 py-5 ${isscrolled && 'shadow-black/30'}`}>
      <nav className='p-3 max-w-[1300px] m-auto flex justify-between items-center text-center mt-3 sm:mt-5 lg:mt-5'>
        <div className=' flex justify-between items-center gap-0.5 sm:gap-2 lg:gap-3 text-[18px]'>
          <span><IoBagHandleSharp /></span>
          <a href="" className='text-[14px] sm:text-[16px] lg:text-[19px]' >The Cofee Factory</a>
        </div>
        <div className='flex gap-4 text-[18px] nav'>
          <h2>Home</h2>
          <h2>About us</h2>
          <h2>Services</h2>
          <h2>Contact us</h2>
        </div>

        <div className='relative flex gap-4 text-[18px]  '>
          <input type="text" placeholder='Search' className=' border-1 border-gray-400 rounded-2xl text-center text-[16px] py-1' onChange={(e) => {
            setsearchterm(e.target.value)
          }}
            onFocus={() => {
              handlesearch()
            }} />
          <span className='absolute top-2 lg:right-12 right-20 cursor-pointer'><FaSearch /></span>
          <button className={`cursor-pointer  lg:hidden`} onClick={() => {
            setmobileactive(true)
          }}>
            {
              mobileactive ? <></> : <FaBars />
            }

          </button>
          <button className='relative cursor-pointer text-xl' onClick={() => {
            setactivepanel('cart')
          }

          }>
            <FaShoppingBag />
          </button>
          {
            cart.length >= 1 &&
            <span className='absolute flex justify-center text-center items-center bg-black w-5 h-5 rounded-full top-6  left-auto right-[-6px] text-white text-xs'>{cartquantity}</span>
          }
        </div>
      </nav>
    </header>
  )
}

export default Navbar
