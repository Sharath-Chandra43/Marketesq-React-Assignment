import { configureStore } from "@reduxjs/toolkit";
import bookNowReducer from './bookNowSlice';

const appStore=configureStore({
    reducer: {
        bookNow: bookNowReducer,
      },
});

export default appStore;