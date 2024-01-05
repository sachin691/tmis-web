// Dependencies
import { configureStore } from "@reduxjs/toolkit";

// Local Files
import curTabSlice from "./curTabSlice";
import navOpenStatusSlice from "./navOpenStatusSlice";

const store = configureStore({
  reducer: {
    curTab: curTabSlice,
    navOpenStatus: navOpenStatusSlice,
  },
});

export default store;
