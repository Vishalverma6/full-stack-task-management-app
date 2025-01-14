import React from 'react'
import Template from '../components/core/auth/Template'
import Footer from '../components/common/Footer'

const Login = () => {
  return (
    <>
     <div>
      <Template
        title="Welcome Back! Log In to Your Account"
        desc="Access your personalized dashboard and start exploring."
        formtype="login" 
      />
    </div>

    
      {/* footer */}
      <div className='mt-60 '>
          <Footer/>
       </div>
    </>
  )
}

export default Login
