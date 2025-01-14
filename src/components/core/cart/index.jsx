import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RenderCartCourses from './RenderCartMenu'
import RenderTotalAmount from './RenderTotalAmount'
import { resetCart } from '../../../slices/cartSlice'


const Cart = () => {
    const dispatch = useDispatch();

    const {total, totalItems} =useSelector((state) => state.cart)
    console.log("totalItems",totalItems)
  return (
    <div className="flex flex-col gap-6 w-8/12 items-center justify-center">
            <h1 className=" mb-14 mt-8 text-2xl font-medium text-richblack-5 ">
                Your Cart
            </h1>
            <div className='flex gap-4 ml-12 w-full md:w-7/12 justify-between'>
                <p className="border-b border-b-richblack-400 pb-2 font-semibold text-richblack-400">{totalItems} Menu Items in Cart</p>
                <button 
                 onClick={() => dispatch(resetCart())}
                className='bg-yellow-50 text-richblack-800 border rounded-md py-[2px] px-[4px]'>
                    Reset Cart
                </button>
            </div>

            {total > 0 
            ? (<div className="mt-8 flex flex-col items-start gap-x-10 gap-y-6 lg:flex-row">
                <RenderCartCourses/>
                <RenderTotalAmount/>
              </div>)
            : (<p className="mt-14 text-center text-2xl text-richblack-100">
                Your Cart is Empty</p>) } 
            
        </div>
  )
}

export default Cart
