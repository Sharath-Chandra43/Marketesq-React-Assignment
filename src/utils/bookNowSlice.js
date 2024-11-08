import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    email: '',
    phone: '',
    adults: 1,
    children: 0,
    rooms: 1,
    price: 0,
    checkinDate: '',
  checkoutDate: '',
  };

const bookNowSlice=createSlice({
    name:'bookNow',
    initialState,
    reducers:{
        setName: (state, action) => {
            state.name = action.payload;
          },
          setEmail: (state, action) => {
            state.email = action.payload;
          },
          setPhone:   
       (state, action) => {
            state.phone = action.payload;
          },
          setAdults:   
       (state, action) => {
            state.adults = action.payload;
          },
          setChildren: (state, action) => {
            state.children = action.payload;
          },
          setRooms: (state, action) => {
            state.rooms = action.payload;   
      
          },
          setPrice: (state, action) => {
            state.price = action.payload;
          },
          setCheckInDate: (state, action) => {
            state.checkinDate = action.payload;
          },
          setCheckOutDate: (state, action) => {
            state.checkoutDate = action.payload;   
          },
      
    }
})

export const {
    setName,
    setEmail,
    setPhone,
    setAdults,
    setChildren,
    setRooms,
    setPrice,
    setCheckInDate,
    setCheckOutDate
  } = bookNowSlice.actions;
  
  export default bookNowSlice.reducer;