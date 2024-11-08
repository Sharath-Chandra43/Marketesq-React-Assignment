import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux';

const BookingConfirmed = () => {
    const { name, email, phone, adults, children, rooms, price,checkinDate,checkoutDate } = useSelector((state) => state.bookNow);
  return (
    <>
    <Header />
    <div>
        <div>
            <h1>{name}</h1>
            <p>{phone}</p>
            <p>{email}</p>
            <span>{adults} Adults</span>
            <span>{children} Childrens</span>
        </div>
        <div>
        
        </div>
    </div>
    <div class="bg-white p-14 rounded-lg flex w-[1200px] border border-gray-300">
        <div class="flex flex-col items-center mr-24">
            <label for="checkin">CHECK-IN</label>
            <p className=''>{checkinDate}</p>
        </div>
        <div class="flex items-col flex-col mr-24 ">
            <label for="checkout">CHECK-OUT</label>
            <p className=''>{checkoutDate}</p>
        </div>
        <div class="flex flex-col items-center mr-24">
            <h1>ROOMS</h1>
        <div class="flex">
            <span class="text-lg font-bold">{rooms}</span>
        </div>
        </div>
        <div class="flex items-center">
            <button class="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"  fdprocessedid="wwq2e" >{price}</button>
        </div>
        </div>
    </>
  )
}

export default BookingConfirmed