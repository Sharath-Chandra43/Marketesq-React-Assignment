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
    
    <div>
        <Header/>
        <div class="p-30"><div class="flex justify-around ">
        <div>
            <h1 class="text-6xl font-roboto text-black w-2">Work From Ladakh</h1>
            <p class="mt-5">India's first true digital tourism ecosystem</p>
            <div class="flex p-4">
            <FaFacebook size='32'/>
            <AiFillInstagram size='32'className='ml-6' />
            </div>
          </div>
            <div class="image-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Leh_from_Stok.jpg" alt="img" class="w-[700px]" />
                </div>
                <div class="absolute top-3/4">
                         <div class="bg-white p-14 rounded-lg flex w-[1200px] border border-gray-300">
                    <div class="flex flex-col items-center mr-24"><label for="checkin">CHECK-IN</label>
                    <input type="date" id="checkin" class="border border-gray-300 p-2 rounded" />
                    </div>
                    <div class="flex items-col flex-col mr-24 ">
                        <label for="checkout">CHECK-OUT</label>
                        <input type="date" id="checkout" class="border border-gray-300 p-2 rounded" />
                    </div>
                    <div class="flex flex-col items-center mr-24">
                        <h1>ROOMS</h1><div class="flex">
                            <button class="bg-white-500 hover:bg-white-700 text-black font-bold py-2 px-4 rounded-lg ml-2" fdprocessedid="fa97cs">-</button>
                            <span class="text-lg font-bold">1</span>
                            <button class="bg-white-500 hover:bg-white-700 text-black font-bold py-2 px-4 rounded-lg ml-2" fdprocessedid="rzm32j">+</button>
                            </div>
                            </div>
                        <div class="flex items-center">
                            <button class="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"  fdprocessedid="wwq2e" onClick={handleBookNow}>Book Now</button>
                        </div>
                         </div>
                </div>
            </div>
        </div>
        <div className='p-40'>
         <Services />
        </div>
        <div>
        <Discover />
        </div>
        <div className='mt-0'>
        <AboutUs />
        </div>
    </div>
  )
}

export default Home  

