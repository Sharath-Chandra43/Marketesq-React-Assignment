import React from 'react'
import { FaStar } from 'react-icons/fa6'

const DiscoverCard = () => {
  return (
    <div >
      <div className="bg-white p-6 rounded-lg w-[250px] shadow-md flex flex-col items-center">
        <div className="flex items-center mb-4">
          <img src="https://res.cloudinary.com/dwhafna5q/image/upload/v1726756818/png-transparent-computer-icons-user-profile-encapsulated-postscript-icon-black-rectangle-black-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-removebg-preview_op8pvh.png" alt="user" className="w-24 rounded-full mr-4" />
          <div className="ml-4">
            <h2 className="text-xl font-bold">Arjun Raghav</h2>
            <div className="flex">
              <FaStar className="text-yellow-500 mr-1" />
              <FaStar className="text-yellow-500 mr-1" />
              <FaStar className="text-yellow-500 mr-1" />
              <FaStar className="text-yellow-500 mr-1" />
            </div>
          </div>
        </div>
        <p className="text-gray-500 ">
          I am writing this after reflecting on my one month stay with Bricabin in Ladakh. Right from picking us up at the airport to dropping us back there after a month, Urgan was very responsible and took good care of my friends and me. read more
        </p>
      </div>
    </div>
  )
}

export default DiscoverCard