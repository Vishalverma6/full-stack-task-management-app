import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSignupData } from '../../../slices/authSlice';
import toast from 'react-hot-toast';
import { signUp } from '../../../services/operations/authAPI';

const SignupForm = () => {
    const dispatch= useDispatch()
    const [formData, setFormData] = useState({
             firstName:"",
             lastName:"",
             userName:"",
             email:"",
             password:"",
             confirmPassword:"",
    });

    const {firstName,lastName,userName,email,password,confirmPassword} = formData
    const navigate= useNavigate();
    const[showPassword,setShowPassword]= useState(false);
    const [showConfirmPassword,setShowConfirmPassword]= useState(false);

    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Password do not matched")
            return
        }

        const signupData={
            ...formData
        };
        const finalData ={
            ...signupData
        }

        // dispatch(setSignupData(finalData))
        dispatch(signUp(firstName,lastName,userName,email,password,confirmPassword,navigate))

        // reset
        setFormData({
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:"",
        })
    }

    function changeHandler(event) {
        setFormData((prev) => (
            {
                ...prev,
                [event.target.name]:event.target.value
            }
        ))
    }


  return (
    <div className=" w-full md:w-6/12">
       <form 
        className=''
       onSubmit={submitHandler}>

          {/* first name and last name */}
          <div className='flex flex-col md:flex-row gap-x-4 mt-[20px]'>
                <label>
                    <p className='text-[0.875] text-richblack-5 mb-1 leading-[1.375]'>
                        First Name <sup className='text-pink-200'>*</sup>
                    </p>
                    <input 
                       type='text'
                       name='firstName'
                       value={formData.firstName}
                       placeholder='Enter First Name'
                       onChange={changeHandler}
                       className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] border-b-2'
                    />
                </label>
                <label>
                    <p className='text-[0.875] text-richblack-5 mb-1 leading-[1.375]'>
                        Last Name <sup className='text-pink-200'>*</sup>
                    </p>
                    <input 
                       type='text'
                       name='lastName'
                       value={formData.lastName}
                       placeholder='Enter Last Name'
                       onChange={changeHandler}
                       className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] border-b-2'
                    />
                </label>
            </div>
            {/* email */}
            <div className='mt-[20px]'>
               <label>
                    <p className='text-[0.875] text-richblack-5 mb-1 leading-[1.375]'>
                        Email Address<sup className='text-pink-200'>*</sup>
                    </p>
                    <input 
                       type='email'
                       name='email'
                       value={formData.email}
                       placeholder='Enter email address'
                       onChange={changeHandler}
                       className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] border-b-2'
                    />
                </label>
            </div>

            {/* userName */}
            <div className='mt-[20px]'>
               <label>
                    <p className='text-[0.875] text-richblack-5 mb-1 leading-[1.375]'>
                        userName <sup className='text-pink-200'>*</sup>
                    </p>
                    <input 
                       type='text'
                       name='userName'
                       value={formData.userName}
                       placeholder='Enter User name'
                       onChange={changeHandler}
                       className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] border-b-2'
                    />
                </label>
            </div>

            {/* password and confirm password  */}
            <div className='flex gap-x-4 mt-[20px]'>
                <label className='relative'>
                    <p className='text-[0.875] text-richblack-5 mb-1 leading-[1.375]'>
                        Create Password<sup className='text-pink-200'>*</sup>
                    </p>
                    <input 
                       type={showPassword ?"text" : "password"}
                       name='password'
                       value={formData.password}
                       placeholder='Enter password'
                       onChange={changeHandler}
                       className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] border-b-2'
                    />
                    <span onClick={()=> setShowPassword((prev)=> !prev)}
                    className='absolute right-3  top-[38px] cursor-pointer'>
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):
                        (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
                    </span>
                </label>
                <label className='relative'>
                    <p className='text-[0.875] text-richblack-5 mb-1 leading-[1.375]'>
                        Confirm password<sup className='text-pink-200'>*</sup>
                    </p>
                    <input 
                       type={showConfirmPassword ? "text":"password"}
                       name='confirmPassword'
                       value={formData.confirmPassword}
                       placeholder='Confirm Password'
                       onChange={changeHandler}
                       className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] border-b-2'
                    />
                    <span onClick={()=> setShowConfirmPassword( (prev)=> !prev)}
                      className='absolute right-3 top-[38px]  cursor-pointer'
                    >
                          {
                            showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>):
                            (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)
                          }
                    </span>
                </label>

            </div>

            {/* Create Button */}
            <button type='submit'
                className='bg-yellow-50 mt-6 rounded-[8px] py-[8px]
                px-[12px] font-medium text-richblack-900 w-full'>
                    Create Account
                </button>
       </form>
    </div>
  )
}

export default SignupForm
