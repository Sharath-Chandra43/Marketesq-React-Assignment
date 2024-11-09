import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs';

const BookingConfirmed = () => {
    const { name, email, phone, adults, children, rooms, price,checkinDate,checkoutDate } = useSelector((state) => state.bookNow);
  return (
    <>
     <Header />
         <div className='flex justify-around'>
             <div className='pl-20'>
               <h1>{name}</h1>
                <p>{phone}</p>
                <p>{email}</p>
                <span className='mr-2'>{adults} Adults</span>
                <span>{children} Childrens</span>
             </div>
             <div className='flex'>
             <div>
             <FaCheckCircle className="text-green-600 bg-white rounded-md p-1 size-28 " />
             </div>
                 <div className='flex flex-col justify-center'>
                    <h1 className='ml-4 font-sans text-3xl font-bold'>Order Complete</h1>
                    <p className='ml-4'>have any questions</p>
                    <Link to="/aboutus"><p className='ml-4 text-blue-800'>contact Us</p></Link>
             </div>
             </div>
     </div>
     <div className='pl-52 flex justify-center mt-8'>
     <div class="bg-white p-14 rounded-lg flex w-[1200px] border border-gray-300">
     <div class="flex flex-col items-center mr-24">
     <label for="checkin">CHECK-IN</label>
     <p className='text-black'>{checkinDate}</p>
     </div>
     <div class="flex items-col flex-col mr-24 ">
     <label for="checkout">CHECK-OUT</label>
     <p className='text-black'>{checkoutDate}</p>
     </div>
     <div class="flex flex-col items-center mr-24">
     <h1>ROOMS</h1>
     <div class="flex">
     <span class="text-lg font-bold">{rooms}</span>
     </div>
     </div>
     <div class="flex items-center">
     <button class="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"  fdprocessedid="wwq2e" >{price}</button>
     </div>
     </div>
     </div>
     <AboutUs />
     </>
  )
}

export default BookingConfirmed