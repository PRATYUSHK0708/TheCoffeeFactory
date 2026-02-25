import React from 'react'
import affogato from '../../src/assets/affogato.jpg'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'

const Cart = ({ activepanel, setactivepanel, cart,removecartitem ,subtotal,shiping,total,incrementquantity,decrementquantity}) => {
    return (
        <section className={`flex flex-col  z-50 fixed top-0 left-auto right-0  h-[100vh] w-full  sm:w-[50%]   lg:w-[22%] bg-white p-2 transition-transform duration-300 shadow-xl shadow-black/30  ${activepanel == 'cart' ? 'translate-x-0 ' : 'translate-x-200'}`}>
            <div>
               {
                cart.length===0 ? <h2 className='text-center mt-4 text-xl text-red-600'>Cart is Empty!</h2>:
                 <h2 className='text-center mt-4 text-xl'>Your cart!</h2>
               }
            </div>
            <div className='flex-1 overflow-y-auto scroll'>
                {
                    cart.map(function (item) {
                        return <div key={item.id} className='flex flex-1 mt-5 border-[.2px] border-gray-00  p-1 rounded-[10px] gap-2  items-center bg-gray-100'>
                            {/* cart image */}

                            <div className='mr-5'>
                                <img src={item.image} className='h-15 w-20 rounded-2xl border-[0.125px] border-gray-400 object-cover ' />
                            </div>

                            {/* cart details */}
                            <div className='flex  flex-1 justify-between  items-center  '>
                                <div className='flex flex-col flex-1 '>
                                    <h3 className='py-1 text-[14px]'>{item.name}</h3>
                                    <h3>${(item.price * item.quantity).toFixed(2)}</h3>
                                </div>
                                <div className='flex  flex-col items-center gap-1 flex-1'>
                                    <div >
                                        <button className='flex  items-center  justify-center bg-gray-300 w-7 h-7 rounded-full cursor-pointer active:scale-95 text-[13px]' onClick={()=>{
                                            removecartitem(item)
                                        }}><FaTrash /></button>
                                    </div>
                                    <div className='flex flex-row gap-1' >
                                        <button className='flex  items-center  justify-center bg-gray-300 w-6 h-6 rounded-full cursor-pointer active:scale-95 text-[13px]'onClick={()=>{
                                            decrementquantity(item)
                                        }} ><FaMinus /></button>
                                        <span>{item.quantity}</span>
                                        <button className='flex  items-center  justify-center bg-gray-300 w-6 h-6 rounded-full cursor-pointer active:scale-95 text-[13px]' onClick={()=>{
                                            incrementquantity(item)
                                        }}><FaPlus /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            {/* cart-bottom-content */}
            <div>
                <div className='flex flex-col p-1 gap-1 border-t-1 border-gray-400 '>
                    <div className='flex flex-row justify-between text-[14px] text-gray-700'>
                        <h3  className='font-semibold'>Subtotal</h3>
                        <h3 className='font-semibold'>${subtotal.toFixed(2)}</h3>
                    </div>
                    <div className='flex flex-row justify-between text-[14px] text-gray-700'>
                        <h3  className='font-semibold'>Shiping</h3>
                        <h3 className='font-semibold'>${shiping.toFixed(2)}</h3>
                    </div>
                    <div className='flex flex-row justify-between text-[14px] text-gray-700 border-b border-gray-400'>
                        <h3  className='font-bold'>Total</h3>
                        <h3 className='font-bold'>${total.toFixed(2)}</h3>
                    </div>
                </div>
                <div className='flex justify-between gap-2  mt-3 '>
                    <button className='flex-1 bg-gray-300 rounded-xl py-2 cursor-pointer active:scale-95' onClick={() => {
                        setactivepanel('false')
                    }}>Close</button>
                    <button className='flex-1 bg-gray-300 rounded-xl py-2 cursor-pointer active:scale-95'>Chechout</button>
                </div>
            </div>
        </section>
    )
}

export default Cart
