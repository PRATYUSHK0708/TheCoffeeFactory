import React from 'react'
import img1 from '../../src/assets/espresso.jpg'
const Product = ({productlist,categories,activebtn,setactivebtn,addtocart,searchterm}) => {

        const productfilter=productlist.filter(e=>{
          const filtered=  (activebtn==="All" )|| (activebtn===e.category)
          const searchedfilter= e.name.toLowerCase().includes(searchterm.toLowerCase()) 

          return filtered && searchedfilter
        })

        const product=productfilter.map(function(item){
                 return<div className='h-[55vh] w-[30vh] border-1 border-gray-300 overflow-hidden rounded-2xl'>
                    {/* card image */}
                    <div className=''>
                        <img src={item.image} className='h-[40vh] min-w-[30vh]  object-cover ' />
                    </div>
                    {/* card content */}
                    <div className='flex flex-col text-center border-t border-gray-300'>
                        <div className='text-[18px] '>
                            <h3>{item.name}</h3>
                        </div>
                        <div className='text-[16px] '>
                            <h3>${item.price}</h3>
                        </div>
                        <div className='mt-1'>
                            <button className=' bg-black/80 text-white text-[12px] px-2 py-[.2rem] rounded-xl active:scale-95 cursor-pointer' onClick={()=>{
                                addtocart(item)
                            }}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
        })
    return (
        <section id='product' className='mt-[5vh]  max-w-[1300px] mx-auto  '>
            {/* category */}
            <div className='flex gap-2 items-center text-center justify-center flex-col lg:flex-row '>
                {
                    categories.map(function (item) {
                        return <button className={`  ${activebtn==item ? 'bg-black':'bg-gray-300'} text-white text-[13px] px-6 py-2 w-30  lg:text-[17px] rounded-xl lg:px-5 lg:py-3 font-bold `} onClick={()=>{
                            setactivebtn(item)

                        }}>{item}</button>

                    })
                }
            </div>
            <div  className='grid   grid-cols-1  sm:grid-cols-2     lg:grid-cols-4 justify-items-center  w-full gap-5  p-5 flex-wrap   '>
                    {
                        product
                    }
            </div>
        </section>
    )
}

export default Product
