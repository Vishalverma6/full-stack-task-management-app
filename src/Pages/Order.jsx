import React from 'react'
import { useSelector } from 'react-redux'
import RenderOrder from '../components/core/order/RenderOrder'
import RenderTotalAmount from '../components/core/cart/RenderTotalAmount'
import OrderHistroy from '../components/core/order/OrderHistory'
import Footer from '../components/common/Footer'
import Slider from '../components/common/Slider'

const Order = () => {

    const {total} = useSelector((state) => state.cart)
  return (
   <>
      <div className='text-white flex flex-col w-10/12  justify-between '>
        <h1 className='flex gap-4 ml-14 mt-20'>
            Cart Items 
            <span className='bg-green-600 text-white rounded-lg hover:bg-green-700'>
                Place Order Now
            </span>
        </h1>
        <div className='flex md:flex-row flex-col w-full justify-between '>
        {total > 0 
            ? (<div className="mt-8 md:ml-14 flex flex-col items-start gap-x-10 gap-y-6 lg:flex-row">
                <RenderOrder/>
                <RenderTotalAmount/>
              </div>)
            : (<p className="mt-14 ml-14 text-center text-2xl text-richblack-100">
                Your Cart is Empty</p>) } 

            <div>
                <OrderHistroy/>
            </div>
        </div>
       
      </div>

      {/* Slider */}
      <div className='mt-32'>
          <Slider/>
       </div>

       {/* footer */}
       <div className='mt-20 mb-16'>
          <Footer/>
       </div>
   </>
  )
}

export default Order
