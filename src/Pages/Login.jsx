import React from 'react'
import Template from '../components/core/auth/Template'

const Login = () => {
  return (
    <div>
      <Template
        title="Welcome Back! Log In to Your Account"
        desc="Access your personalized dashboard and start exploring."
        formtype="login" 
      />
    </div>
  )
}

export default Login
