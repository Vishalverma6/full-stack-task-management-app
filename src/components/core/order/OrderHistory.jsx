import React, { useEffect, useState } from 'react'
import { getAllOrder } from '../../../services/operations/orderAPI';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const OrderHistroy = () => {
    const {token} = useSelector((state) => state.auth
)
    const [allOrder, setAllOrder] = useState(null);
    const [loading, setLoading] = useState(false);

    


    const getAllOrderPlace = async() => {
        try{
            setLoading(true)
            // console.log("Token",token);
            const result = await getAllOrder(token);
            // console.log("result3 ",result);
            setAllOrder(result);

            setLoading(false);
            // toast.success("All Order fetched Successfully ",)
        } catch(error){
            console.log(error);
            toast.error("failed to find the all Order")
        }
    }
    // console.log("Allorder",allOrder)
    useEffect(() => {
        if(!token){
            return;
        }
        getAllOrderPlace();
    },[])
  return (
    <div className="bg-gray-900 text-white min-h-screen pl-3 md:p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">Order History</h1>
            {loading ? (
                <div className="flex flex-wrap justify-center items-center">
                    <div className="spinner border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
                </div>
            ) : (
                <div className="space-y-8">
                    {allOrder?.map((order) => (
                        <div
                            key={order?._id}
                            className="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700"
                        >
                            <h2 className="text-md max-w-maxContent font-semibold text-blue-400 mb-2">
                                Order ID: <span className="text-white">{order?._id}</span>
                            </h2>
                            <p className="text-sm text-gray-400">
                                Order Placed At: <span className="text-white">{order?.createdAt}</span>
                            </p>
                            <p className="text-sm text-gray-400">
                                Total Amount: <span className="text-green-400">₹{order?.totalAmount}</span>
                            </p>
                            <div className="mt-4">
                                <h3 className="text-md font-semibold mb-2">Items:</h3>
                                <div className="space-y-2">
                                    {order?.items?.map((item) => (
                                        <div
                                            key={item?.menuItemId?._id}
                                            className="flex justify-between items-center bg-gray-700 p-3 rounded-md"
                                        >
                                            <p className="text-sm">
                                                <span className="font-medium text-blue-300">Name:</span>{' '}
                                                {item?.menuItemId?.name}
                                            </p>
                                            <p className="text-sm">
                                                <span className="font-medium text-blue-300">Quantity:</span>{' '}
                                                {item?.quantity}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
  )
}

export default OrderHistroy
