import React, { useEffect } from 'react'
import {NavbarLinks} from "../../data/navbar-links"
import { Link, matchPath, useLocation, useNavigate } from 'react-router-dom'
import { CiShoppingCart } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { logout } from '../../services/operations/authAPI';
const Navbar = () => {
    const {token} = useSelector((state) => state.auth)
    const {user}  = useSelector((state) => state.user);
    const {totalItems}= useSelector((state)=> state.cart);
    // const {user} = useSelector((state) => state.user)
    const location= useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const matchRoute =(route) => {
        return matchPath({path:route},location.pathname);
    }

    const clickHandler = () => {
        if(!token){
            toast.error("Please login First to see Your cart")
            return;
        }
        navigate("/cart")
       
    }

    // logout handler
    const logoutHandler =() => {
        dispatch(logout(navigate))
    }

    // Redirect to login if accessing /order while not logged in
    const redirectIfNotLoggedIn = (path) => {
        if (path === "/order" && !token) {
            toast.error("Please login to access Orders");
            navigate("/login");
            return true;
        }
        return false;
    }

    useEffect(() => {
        redirectIfNotLoggedIn(location.pathname);
    }, [location.pathname]);

  return (
    <div className='flex text-white h-14 items-center justify-center border-b-[1px] border-richblack-700 '>
       <div className='flex md:w-11/12 lg:max-w-maxContent items-center  lg:justify-between  lg:px-24'>
         <nav>
            <ul className='flex gap-x-6 text-richblack-25'>
                {
                    NavbarLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link?.path}>
                            <p className={`${matchRoute(link?.path) ? ("text-yellow-25"): 
                                                    ("text-richblack-25")}`}>
                                {link.title}
                            </p>
                            </Link>
                        </li>
                    ))
                }
            </ul>
         </nav>

         {/* Signup And logim button with cart  */}
         <div className=' gap-x-4 items-center md:flex'>
            {

                <button className='relative' 
                onClick={clickHandler}>
                    <CiShoppingCart  className='text-3xl text-richblack-100 '/>
                    {
                        totalItems > 0 && (
                            <span className='absolute top-[-4px] right-[-4px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
                                {totalItems}
                            </span>
                        )
                    }
                </button>





                // <Link 
                //   onClick={clickHandler}
                //    to="/cart"
                //    className='relative'>
                    
                // </Link>
            }
            
            {
                token===null && 
                (
                    <Link to="/login">
                        <button className='border border-richblack-700 bg-richblack-800 px-[10px] py-[6px]
                        text-richblack-100 rounded-md'>
                            Log In
                        </button>                        
                    </Link>
                )
            }
            {
                 token===null &&
                  (
                    <Link to="/signup">
                        <button className='border border-richblack-700 bg-richblack-800 px-[10px] py-[6px]
                        text-richblack-100 rounded-md'>
                            Sign Up
                        </button>
                    </Link>
                )
            }

            {
                token &&(
                    <button 
                      onClick={logoutHandler}
                    className='border border-richblack-700 bg-richblack-800 px-[10px] py-[6px]
                    text-richblack-100 rounded-md'>
                        Logout
                    </button>
                )
            }
            
         </div>
       </div>
    </div>
  )
}

export default Navbar
