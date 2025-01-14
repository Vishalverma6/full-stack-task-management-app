import React from 'react'
import Template from '../components/core/auth/Template'
import Footer from '../components/common/Footer'

const Signup = () => {
  return (
    <>
    <div>
       <Template
         title = "Create Your Account"
         desc="Join us to explore exclusive features and seamless experiences."
         formtype = "signup"
       />
    </div>
    {/* footer */}
    <div className='mt-60 '>
          <Footer/>
       </div>
    </>
  )
}

export default Signup
