import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IconBtn from '../../common/IconBtn';
import { useNavigate } from 'react-router-dom';
import { orderPlace } from '../../../services/operations/orderAPI';

const RenderTotalAmount = () => {
    const {cart,total} = useSelector((state) => state.cart);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {token} = useSelector((state) => state.auth);
    // console.log("cart22",total)

    const handlePlaceOrder = async()=> {
        // console.log("Cart", cart)
        const formattedCart = {
            items: cart.map((item) => ({
                menuItemId: item._id,
                quantity: String(item.quantity), // Convert quantity to string
            })),
        };
        orderPlace(formattedCart, token,dispatch, navigate)
        
    }


  return (
    <div className='ml-8 mb-10 md:min-w-[280px] rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6'>
       <p className='mb-1 text-sm font-medium text-richblack-300'>Total:</p>
       <p className='mb-5 tetx-2
        font-medium text-yellow-100'>Rs {total}</p>


       <IconBtn
       text="Place Order"
       onclick={handlePlaceOrder}
       customClasses={"w-full justify-center"}
       />

    </div>
  )
}

export default RenderTotalAmount
