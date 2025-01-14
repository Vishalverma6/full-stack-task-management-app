import React, { useEffect, useState } from 'react'
import { getAllMenuItems } from '../../services/operations/menuAPI';
import toast from 'react-hot-toast';
import { Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";

const Slider = () => {

  const [menuItem, setmenuItem] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMenuItem = async() => {
    try {
        setLoading(true);
        const result = await getAllMenuItems();
        setmenuItem(result);
        setLoading(false);
    } catch (error) {
        console.log("could not find the menu Item");
        toast.error("could not find the menu Item");
    }
  }

  useEffect(() => { 
    getMenuItem();
  },[]);

  return (
    <div className="min-h-[180px] mx-auto mt-2 max-w-maxContent">
      <Swiper
        spaceBetween={24}
        loop={true}
        freeMode={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      
        
        autoplay={{
          delay: 2500,
        }}
        modules={[FreeMode, Pagination,Navigation, Autoplay]}
        className="w-full"
        breakpoints={{
          320: {
            slidesPerView: 1, // For screens up to 320px width
          },
          480: {
            slidesPerView: 2, // For screens up to 480px width
          },
          768: {
            slidesPerView: 3, // For screens up to 768px width
          },
          1024: {
            slidesPerView: 4, // Default view
          },
        }}
        
      >
        {menuItem?.map((item) => (
          <SwiperSlide key={item?._id} className="bg-gray-800 p-4 rounded-lg shadow-md">
            <div className='flex flex-col gap-3'>
              <p className="text-sm text-gray-400">
                Name: <span className="text-white">{item?.name}</span>
              </p>
              <p className="text-sm text-gray-400">
                Category: <span className="text-white">{item?.category}</span>
              </p>
              <p className="text-sm text-gray-400">
                Price: <span className="text-green-400">₹{item?.price}</span>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
