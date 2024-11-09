import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa6'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import Services from './Services'
import Discover from './Discover'
import AboutUs from './AboutUs'

const Home = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/booknow");
  };

  return (
    <div className="container mx-auto px-4"> {/* Container with margin and padding */}
      <Header />

      <div class="md:p-30 sm:w-auto sm:h-auto">
        <div class="md:flex md:justify-around ">
        <div >
          <h1 class="md:text-6xl sm:font-roboto text-black w-2 sm:font-black sm:text-3xl">Work From Ladakh</h1>
           <p class="md:mt-5 sm:mt-10">India's first true digital tourism ecosystem</p>
        <div class="md:flex md:p-4 sm: sm:flex">
          <FaFacebook size='32' />
          <AiFillInstagram size='32'className='ml-6' />
        </div>
      </div>
  <div class="image-container">
    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Leh_from_Stok.jpg" alt="img" class="md:w-[700px] sm:w-[400px] sm:mt-4" />
  </div>
   
  <div class="md:absolute md:top-3/4 md:max-w-[1200px] sm:max-w-[600px]">
  <div class="bg-white p-14 rounded-lg flex border border-gray-300">
    <div class="md:flex md:flex-col md:items-center md:mr-24 sm:text-xs">
      <label for="checkin">CHECK-IN</label>
      <input type="date" id="checkin" class="border border-gray-300 p-2 rounded" />
    </div>
    <div class="md:flex md:items-col md:flex-col md:mr-24 sm:text-xs">
      <label htmlFor="checkout">CHECK-OUT</label>
      <input type="date" id="checkout" class="border border-gray-300 p-2 rounded" />
    </div>
    <div class="md:flex md:flex-col md:items-center md:mr-24 sm:text-xs">
      <h1>ROOMS</h1>
      <div class="flex flex-col sm:flex-row sm:items-center">
  <button class="bg-white-500 hover:bg-white-700 text-black font-bold py-2 px-4 rounded-lg ml-2 sm:text-xs" fdprocessedid="fa97cs">-</button>
  <span class="text-lg font-bold sm:text-xs">0</span>
  <button class="bg-white-500 hover:bg-white-700 text-black font-bold py-2 px-4 rounded-lg ml-2 sm:text-xs" fdprocessedid="rzm32j">+</button>
</div>
    </div>
    <div class="md:flex md:items-center md:mr-24 sm:text-xs">  {/* Add this div to group the button with the other elements */}
      <button class="bg-blue-700 hover:bg-blue-900 text-white font-bold md:py-2 md:px-4 sm:py-2 sm:px-4 sm:text-xs rounded" fdprocessedid="wwq2e" onClick={handleBookNow}>Book Now</button>
    </div>
  </div>
</div>

 </div>
</div>


      <div className='py-20'> {/* Adjust padding as needed */}
        <Services />
      </div>

      <div>
        <Discover />
      </div>

      <div className='mt-20'> {/* Adjust margin as needed */}
        <AboutUs />
      </div>
    </div>
  )
}

export default Home