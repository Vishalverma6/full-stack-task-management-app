import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart, decreaseQuantityFromCart, removeFromCart } from '../../../slices/cartSlice'
import { MdDelete } from 'react-icons/md'

const RenderCartCourses = () => {

    const {cart}= useSelector((state)=> state.cart)
    // console.log("cart",cart)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const clickHandler = (item) => {
    //     dispatch(addToCart(item))
    // }
    const decreaseQuantity = (item) => {
        if (item.quantity > 1) {
            dispatch(decreaseQuantityFromCart(item?._id)) // Remove one unit of the item
        }
    };

    const increaseQuantity = (item) => {
        dispatch(addToCart(item)); // Increment quantity by adding the same item
    };

  return (
    <div className='text-white flex flex-col flex-1 mb-20 ml-10 md:ml-0 lg:ml-0'>
       {
        cart.map((item,index) => (
            <div key={item._id}
            className={`flex  w-full flex-wrap items-start justify-between gap-6 ${
            index !== cart.length -1 && ("border-b border-b-richblack-400 pb-6")
            } ${index !== 0 && "mt-6"}`}
            >
                <div className='flex flex-1 flex-col'>
                    <p 
                    //  onClick={clickHandler(item)}
                    className="text-lg font-medium text-richblack-5">
                        {item.name}
                    </p>
                    <p className="text-sm text-richblack-300">{item.category}</p>
                </div>

                <span className='text-blue-200 flex gap-x-2'>
                   Rs 
                   <p>{item.price}</p>
                </span>

                <div className='flex flex-col items-end gap-2'>
                    <button
                    onClick={()=> dispatch(removeFromCart(item._id)) }
                    className='flex items-center gap-x-1 rounded-md  border border-richblack-600 bg-richblack-700 py-[10px] px-[10px] text-pink-200'
                    >
                        <MdDelete />
                        <span>Remove</span>
                    </button>
                    
                </div>

                <div className="flex items-center gap-4">
                        <span
                            onClick={() => decreaseQuantity(item)}
                            className="cursor-pointer bg-richblack-700 hover:scale-110 rounded-md px-[6px] text-2xl text-yellow-500 hover:text-yellow-700 transition"
                        >
                            -
                        </span>
                        <span className="text-yellow-200">{item.quantity}</span>
                        <span
                            onClick={() => increaseQuantity(item)}
                            className="cursor-pointer bg-richblack-700 hover:scale-110 rounded-md px-[4px] text-xl text-yellow-50 hover:text-yellow-700 transition"
                        >
                            +
                        </span>
                    </div>

                <div>
                    <h1>Total</h1>
                    <span className='text-yellow-50'>
                       Rs. {item.price * item.quantity}
                    </span>
                </div>
            </div>
        ))
       }
    </div>
  )
}

export default RenderCartCourses
