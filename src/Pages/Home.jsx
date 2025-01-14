import React from 'react'
import { Link } from 'react-router-dom'
import IconBtn from '../components/common/IconBtn'
import Slider from '../components/common/Slider'
import Footer from '../components/common/Footer'

const Home = () => {
  return (
    <div className="text-white flex flex-col mx-10 mb-10 md:mx-0">
  {/* Hero Section */}
  <div className="flex flex-col gap-3 items-center justify-center mt-20">
    <h1 className="text-3xl font-bold text-center md:text-4xl lg:text-5xl">
      Delicious Food Delivered to Your Doorstep
    </h1>
    <p className="text-lg text-gray-300 text-center md:text-xl">
      Order from a variety of cuisines with ease and convenience.
    </p>
  </div>

  {/* About Section */}
  <div className="flex flex-col gap-3 items-center justify-center mt-20">
    <p className="text-lg text-center text-gray-300 md:text-xl">
      Fresh, Tasty, and Timely – Experience the best food delivery service in your area
    </p>
    <p className="text-lg text-center text-gray-300 md:text-xl">
      Wide range of menu items, flexible payment options, and seamless order management.
    </p>
  </div>

  {/* Feature Section */}
  <div className="flex flex-col gap-3 items-center justify-center mt-20">
    <p className="text-2xl font-semibold text-center text-gray-200">
      Explore Our Most Popular Dishes
    </p>
    <p className="text-lg text-center text-gray-300">
      Handpicked selections from our menu, updated weekly.
    </p>
  </div>

  {/* Call to Action Section */}
  <div className="flex flex-col gap-6 items-center justify-center mt-10">
    <Link to="/signup">
      <IconBtn 
        text="Get Started Now"
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 shadow-md transition-all"
      />
    </Link>

    <h1 className="text-xl text-gray-300">or</h1>

    <Link to="/order">
      <IconBtn 
        text="Order Your Favorite Meal Today!"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 shadow-md transition-all"
      />
    </Link>
  </div>


  <div>
  <div class="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center">
  <h1 class="text-4xl font-bold mb-6 text-center">Events We Cater!</h1>
  
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {/* <!-- First row --> */}
    <div class="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
      <h2 class="text-2xl font-semibold text-blue-400">Birthdays</h2>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
      <h2 class="text-2xl font-semibold text-blue-400">Weddings</h2>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
      <h2 class="text-2xl font-semibold text-blue-400">Farmhouse Parties</h2>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
      <h2 class="text-2xl font-semibold text-blue-400">Kids Party</h2>
    </div>
    {/* <!-- Second row --> */}
    <div class="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
      <h2 class="text-2xl font-semibold text-blue-400">Sangeet</h2>
    </div>
    <div class="bg-gray-700 p-4 rounded-lg shadow-md border border-gray-600">
      <h2 class="text-2xl font-semibold text-blue-400">Corporate Events</h2>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
      <h2 class="text-2xl font-semibold text-blue-400">Get Togethers</h2>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
      <h2 class="text-2xl font-semibold text-blue-400">Family Reunion</h2>
    </div>
    {/* <!-- Third row --> */}
    <div class="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
      <h2 class="text-2xl font-semibold text-blue-400">Pool Party</h2>
    </div>
    <div class="bg-gray-700 p-4 rounded-lg shadow-md border border-gray-600">
      <h2 class="text-2xl font-semibold text-blue-400">Tea Party</h2>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
      <h2 class="text-2xl font-semibold text-blue-400">Cocktail Party</h2>
    </div>
    <div class="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
      <h2 class="text-2xl font-semibold text-blue-400">Many More!</h2>
    </div>
  </div>
</div>



  </div>
{/* slider for best menu */}
  <div>
    <Slider/>
  </div>

  {/* Footer */}
  <Footer/>
  
</div>


  )
}

export default Home
