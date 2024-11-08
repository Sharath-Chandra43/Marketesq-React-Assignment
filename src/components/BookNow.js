import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setEmail, setPhone, setAdults, setChildren, setRooms, setPrice,setCheckInDate,setCheckOutDate } from '../utils/bookNowSlice';
import Header from './Header';
import AboutUs from './AboutUs';
import { FaArrowRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const BookNow = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const { name, email, phone, adults, children, rooms, price, } = useSelector((state) => state.bookNow);

  const handleCheckinDate=(e)=>{
    dispatch(setCheckInDate(e.target.value))
  }

  
  const handleCheckOutDate=(e)=>{
    dispatch(setCheckOutDate(e.target.value))
  }
  const handleNameChange = (e) => {
    dispatch(setName(e.target.value));
  };



  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const handlePhoneChange = (e) => {
    dispatch(setPhone(e.target.value));
  };

  const handleAdultsChange = (e) => {
    dispatch(setAdults(parseInt(e.target.value)));
  };

  const handleChildrenChange = (e) => {
    dispatch(setChildren(parseInt(e.target.value)));
  };

  const handleRoomsChange = (delta) => {
    dispatch(setRooms(rooms + delta));
  };

  const handleBookNow = () => {
    console.log('Booking details:', { name, email, phone, adults, children, rooms, price });
   // navigate to  the Bookconfirmed component
   navigate("/bookingconfirmed")
  };

  const calculatePrice = () => {
    const basePrice = 2000; // Base price per room
    const adultPrice = 750; // Additional price per adult
    const childPrice = 200; // Additional price per child

    const totalAdultPrice = adultPrice * adults;
    const totalChildPrice = childPrice * children;
    const totalRoomPrice = basePrice * rooms;

    const totalPrice = totalRoomPrice + totalAdultPrice + totalChildPrice;
    dispatch(setPrice(totalPrice));
  };

  useEffect(() => {
    calculatePrice(); // Calculate price on component mount and on room changes
  }, [adults, children, rooms]);

  return (
    <>
      <Header />
      <div className="book-now-modal bg-white p-4 rounded shadow-md">
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-row mb-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              className="border mr-96 rounded px-2 py-1 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col mb-4">
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={handlePhoneChange}
              className="border rounded px-2 py-1 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className='flex'>
            <div className="flex justify-between mb-4">
              <div className="flex items-center">
                <label className="mr-2 ml-8">Adults:</label>
                <input
                  type="number"
                  min="1"
                  value={adults}
                  onChange={handleAdultsChange}
                  className="border rounded px-2 py-1 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center">
                <label className="mr-2">Children:</label>
                <input
                  type="number"
                  min="0"
                  value={children}
                  onChange={handleChildrenChange}
                  className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-14 rounded-lg flex w-[1200px] border border-gray-300">
          <div className="flex flex-col items-center mr-24">
            <label htmlFor="checkin">CHECK-IN</label>
            <input type="date" id="checkin" className="border border-gray-300 p-2 rounded" onChange={handleCheckinDate}/>
          </div>
          <div className="flex items-col flex-col mr-24 ">
            <label htmlFor="checkout">CHECK-OUT</label>
            <input type="date" id="checkout" className="border border-gray-300 p-2 rounded" onChange={handleCheckOutDate} />
          </div>
          <div className="flex flex-col items-center">
            <h1>ROOMS</h1>
            <div className="flex">
              <button className="bg-white-500 hover:bg-white-700 text-black font-bold py-2 px-4 rounded-lg ml-2" disabled={rooms <= 1} onClick={() => handleRoomsChange(-1)}>-</button>
              <span className="text-lg font-bold">{rooms}</span>
              <button className="bg-white-500 hover:bg-white-700 text-black font-bold py-2 px-4 rounded-lg ml-2" onClick={() => handleRoomsChange(1)}>+</button>
            </div>
          </div>
          <div className="flex justify-center items-center relative">
            <span>
              <button className="bg-blue-900 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"  fdprocessedid="wwq2e" >₹ {price}
                <FaArrowRight className='bg-blue-950  h-10 rounded text-white absolute top-3.5 left-20' onClick={handleBookNow} />   
              </button>
            </span>
          </div>
        </div>
        <AboutUs />
      </div>
    </>
  );
};

export default BookNow;