import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAllOrder } from '../../../services/operations/orderAPI';
import toast from 'react-hot-toast';
import { all } from 'axios';

const RenderOrder = () => {

    
    const {token} = useSelector((state) => state.auth)
    const [loading, setLoading] = useState(false);
    

    
   

     
    const {cart} = useSelector((state) => state.cart);

  return (
    <div className="text-white flex flex-col flex-1 mb-20 ml-10 md:ml-0 lg:ml-0">
    {cart.map((item, index) => (
        <div
            key={item._id}
            className={`flex w-full flex-wrap items-start justify-between gap-6 ${
                index !== cart.length - 1 ? "border-b border-b-richblack-400 pb-6" : ""
            } ${index !== 0 ? "mt-6" : ""}`}
        >
            {/* Item Details */}
            <div className="flex flex-1 flex-col">
                <p 
                    // Uncomment if click handler is required: onClick={clickHandler(item)}
                    className="text-lg font-medium text-richblack-5 cursor-pointer hover:text-richblack-100"
                >
                    {item.name}
                </p>
                <p className="text-sm text-richblack-300">{item.category}</p>
            </div>

            {/* Item Price */}
            <span className="text-blue-200 flex flex-col gap-x-2 items-center">
                <div className='flex gap-x-2'>
                <span>Rs</span>
                <p className="text-lg font-semibold">{item.price}</p>
                </div>
                <p>
                    Qty.
                    <span>{item?.quantity}</span>
                </p>
            </span>

            {/* Total Price */}
            <div className="text-right">
                <h1 className="text-sm text-gray-400 font-medium">Total</h1>
                <span className="text-yellow-50 text-lg font-bold">
                    Rs. {item.price * item.quantity}
                </span>
            </div>
        </div>
    ))}
     </div>

  )
}

export default RenderOrder
