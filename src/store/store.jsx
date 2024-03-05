// Dependencies
import { configureStore } from "@reduxjs/toolkit";

// Local Files
import curTabSlice from "./curTabSlice";
import navOpenStatusSlice from "./navOpenStatusSlice";
import checkoutPermitSlice from "./checkoutPermitSlice";


const store = configureStore({
  reducer: {
    curTab: curTabSlice,
    navOpenStatus: navOpenStatusSlice,
    checkoutPermit: checkoutPermitSlice,

  },
  devTools:true
});

export default store;
