import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer class="bg-richblack-700 text-white py-8">
      <div class="container mx-auto flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center">
        <p class="text-sm">&copy; 2024 Delivery System. All rights reserved.</p>
        <nav class="space-x-4  flex flex-col md:flex-row text-center">
          <a href="#" class="text-blue-400 hover:text-blue-300">Home</a>
          <a href="#" class="text-blue-400 hover:text-blue-300">Services</a>
          <a href="#" class="text-blue-400 hover:text-blue-300">Wedding</a>
          <a href="#" class="text-blue-400 hover:text-blue-300">Menu</a>
          <a href="#" class="text-blue-400 hover:text-blue-300">Contact Us</a>
        </nav>
        <div class="space-x-4 flex flex-col md:flex-row text-right">
          <a href="#" class="text-blue-400 hover:text-blue-300">Privacy & Policy</a>
          <a href="#" class="text-blue-400 hover:text-blue-300">Terms & Conditions</a>
        </div>
      </div>
     </footer>
  </div>
  
  )
}

export default Footer
