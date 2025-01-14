
import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

const Template = ({title, desc, formtype}) => {
  return (
    <div className='flex flex-col text-white w-8/12 max-w-[1050px] justify-between py-12 mx-auto gap-y-12 mt-7 gap-x-36'>
      
        <div className='w-[]'>
           <h1 className='text-richblack-5 text-[1.875rem] font-semibold leading-[2.375rem]'>{title}</h1>
           <p className='font-edu-sa font-bold italic text-blue-100 text-[1rem]'>{desc}</p>
        </div>
        {
            formtype === "signup" ?(<SignupForm/>) : (<LoginForm/>)
        }
    </div>
  )
}

export default Template
