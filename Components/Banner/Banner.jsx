import React, { useRef } from 'react'
import banner1 from '../../src/assets/banner1.jpg'
import banner2 from '../../src/assets/banner2.jpg'
import banner3 from '../../src/assets/banner3.jpg'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const Banner = () => {
    let banner=[banner1,banner2,banner3]

    const bannerref=useRef(null)

    const bannerleft=()=>{
        bannerref.current.scrollBy({
            left: -bannerref.current.clientWidth,
            behaviour:"smooth"
        })
    }
        
    const bannerright=()=>{
        bannerref.current.scrollBy({
            left: bannerref.current.clientWidth,
            behaviour:"smooth"
        })
    }
        
    
 
  return (
    <section className='relative mt-[20vh]  max-w-[1300px] m-auto flex text-center items-center ' >
        <button 
         className='absolute top-1/2 left-0 right-auto  h-20 text-[30px] mr-1 rounded-xs cursor-pointer bg-gray-300' onClick={bannerleft} ><MdOutlineKeyboardArrowLeft /></button>
            <div 
            ref={bannerref}
             className=' flex overflow-x-hidden   sm:h-[40vh] lg:h-[70vh]  scroll  scroll-smooth'>
            {
                banner.map(function(item){
                    return <img src={item} alt="" className='min-w-full h-[40vh] sm:h-[50vh] lg:h-[70vh] object-cover' />
                })
            }
            </div>
            <button 
             className='   absolute top-1/2 left-auto  right-0 h-20 text-[30px] ml-1 rounded-xs cursor-pointer bg-gray-300' onClick={bannerright}><MdOutlineKeyboardArrowRight/></button>
    </section>
  )
}

export default Banner
