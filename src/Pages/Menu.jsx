import React, { useEffect, useState } from 'react'
import { createMenuItem, deleteMenuItem, getAllMenuItems, updateMenuItem } from '../services/operations/menuAPI';
import toast from 'react-hot-toast';
import { setLoading } from '../slices/authSlice';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { MdAddCircleOutline, MdDelete, MdShoppingCart } from 'react-icons/md';
import IconBtn from '../components/common/IconBtn';
import ConfirmationModal from '../components/common/ConfirmationModal';
import { addToCart } from '../slices/cartSlice';
import Footer from '../components/common/Footer';
import Slider from '../components/common/Slider';



const Menu = () => {
    const [menuItem, setmenuItem] = useState([]);
    const [loading, setLoading] =useState(false);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [confirmationModal, setConfirmationModal] = useState(null);
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);

    const {register,reset,handleSubmit,setValue,
        formState:{errors}
      }  = useForm()


    const getMenuItem = async() => {
        try{
            setLoading(true)
            const result = await getAllMenuItems();
            setmenuItem(result);
            // console.log("result....",result)
            setLoading(false);
        }
        catch(error){
            console.log("could not find the menu Item")
            toast.error("could not find the menu Item")

        }
    }

    const onSubmit = async (data) => {
        try {
          setLoading(true);
          let result ;

          if(selectedMenuItem){
            result= await updateMenuItem({menuId:selectedMenuItem._id},data)
            console.log("selectedMenuItem",selectedMenuItem._id)
            console.log("result",result)
            setSelectedMenuItem(null);
          }
          else{
            result= await createMenuItem(data);
            
          }
         
          

          toast.success(`Menu Item ${selectedMenuItem ? "updated ": "created"} succesfully`);
          setIsModalOpen(false);
          setLoading(false);

          reset();
      
        //   refresh the menu items
          await getMenuItem();
        } catch (error) {
          console.error(`Error ${selectedMenuItem ? "updating" : "creating"} menu item:`, error);
          toast.error(`Failed to ${selectedMenuItem ? "update" : "create"} menu item.`);
          setLoading(false);
        }
      };
      
    useEffect(() => {
        getMenuItem();
    },[])

    const handleDeleteMenu =async(menuId) => {
        console.log("menuid", menuId)
       const updatedMenu=   await deleteMenuItem(menuId);
       if(updatedMenu){
        setmenuItem((prevMenu) => prevMenu.filter((item)=> item._id !== menuId))
       }
       getMenuItem();
        setConfirmationModal(null);

    }

    const openUpdateModal = async(menuItem) => {
        setSelectedMenuItem(menuItem);
        setValue("name",menuItem.name);
        setValue("category",menuItem.category);
        setValue("price",menuItem.price);
        setIsModalOpen(true);
    }

    const handleAddToCart = (item) => {
        dispatch(addToCart(item))
    }

  return (
    <>
      <div className={`text-white w-full flex flex-col ${isModalOpen ? "blur-sm ": ""} items-center justify-center'`}>
        <h1 className='text-3xl mt-12 '>Menu</h1>
       <div className=" mt-40 grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4">
          {
            loading ? ( <div className='spinner'></div>)
            : (
                menuItem.map((item,index) => (
                    <div
                     className="bg-gray-800 text-white rounded-lg shadow-md p-4 flex flex-col gap-4 hover:shadow-lg transition-shadow"
                    key={item._id}>
                        <div className="flex justify-between gap-x-4 items-center">
                            <h2 lassName="text-lg font-semibold">
                            {item?.name}
                            </h2>
                            <p className="text-green-400 text-sm font-medium">
                                {item.price}
                            </p>
                        </div>

                        {/* update and delete button */}
                        <div className="flex gap-3 justify-between">
                            <button className="bg-yellow-400 text-black py-2 px-4 rounded-md text-sm font-medium hover:bg-yellow-500 transition" 
                            onClick={() => openUpdateModal(item)}>
                                Update
                            </button>
                            <button 
                            onClick={()=> setConfirmationModal(
                                {
                                    text1:"Delete This Menu",
                                    text2: "All the Menu Detail Will be deleted ",
                                    btn1Text: "Delete",
                                    btn2Text: "Cancel",
                                    btn1Handler: ()=> handleDeleteMenu(item._id),
                                    btn2Handler: () => setConfirmationModal(null),
                                }
                            )}
                            >
                            <MdDelete size={24}
                             className="bg-red-500 text-white  rounded-md text-sm font-medium hover:bg-red-600 transition" />
                            </button>

                            <button
                                className="bg-richblack-300 px-[4px] text-white rounded-md text-sm relative group font-medium hover:bg-richblack-600 transition"
                                onClick={() => handleAddToCart(item)}>
                                <MdShoppingCart size={24} />
                                <span className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-richblack-500 text-white text-xs rounded-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                 Add to Cart
                                </span>
                            </button>
                        </div>


                        {/* {index !== menuItem.length - 1 && <p>|</p>} */}
                    </div>


                ))
            )
          }
       </div>

       {/* create Menu item Button */}
       <button
          className="mt-8 bg-blue-500 text-white py-2 px-4 rounded-md"
          onClick={() => setIsModalOpen(true)} 
        >
          Create Menu Item
        </button>
      </div>


       {
        isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center flex-wrap backdrop-blur-0 justify-center">
              <div className="border flex flex-col flex-wrap border-richblack-600 bg-richblack-900 p-6 rounded-md md:w-1/3">
                <h2 className="text-xl text-richblack-300 text-center mb-8 font-bold ">
                    {selectedMenuItem ? "Update Menu Item" :"Create Menu Item"}
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} 
                className='flex flex-col items-center justify-center'>
                <div className='flex flex-col gap-2'>
                <label className="text-sm text-richblack-5" htmlFor='sectionName'>Name<sup className='text-red-500'>*</sup></label>
                <input
                id='name'
                placeholder='Add Name to create Menu'
                {...register("name",{required:true})}
                className='form-style w-full'
                />
                {errors.name && (
                <span className="ml-2 text-xs tracking-wide text-pink-200">
                    Name is required**
                </span>
                )}
            </div>
            <div className='flex flex-col gap-2'>
                <label className="text-sm text-richblack-5" htmlFor='sectionName'>Category<sup className='text-red-500'>*</sup></label>
                <input
                id='category'
                placeholder='Add Category create Menu'
                {...register("category",{required:true})}
                className='form-style w-full'
                />
                {errors.category && (
                <span className="ml-2 text-xs tracking-wide text-pink-200">
                    category is required**
                </span>
                )}
            </div>
            <div className='flex flex-col gap-2'>
                <label className="text-sm text-richblack-5" htmlFor='sectionName'>Price<sup className='text-red-500'>*</sup></label>
                <input
                id='price'
                placeholder='Add Price to create Menu'
                {...register("price",{required:true})}
                className='form-style w-full'
                />
                {errors.price && (
                <span className="ml-2 text-xs tracking-wide text-pink-200">
                    price is required**
                </span>
                )}
            </div>
            <div className='mt-5 flex items-end gap-x-4'>
                <IconBtn 
                type="submit"
                text={`${selectedMenuItem ? "update Menu" : "Create Menu"}`}
                outline={true}
                customClasses=''
                >
                    <MdAddCircleOutline size={20} className='text-yellow-50' />
                </IconBtn>
                <button 
                type='button'
                    onClick={() => {
                        setIsModalOpen(false);
                        setSelectedMenuItem(null);
                        reset();
                    }}
                className='text-sm text-richblack-300  underline'
                >
                    cancel
                </button>
                
                </div>
                </form>
          </div>
       </div>
        )
       }

       {
       confirmationModal ? (
        <ConfirmationModal modalData={confirmationModal} />

       ): (<div></div>)
       }

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

export default Menu
