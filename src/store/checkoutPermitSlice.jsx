import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const checkoutPermitSlice = createSlice({
  name: "checkoutPermit",
  initialState: initialState,
  reducers: {
    updateCheckoutPermit: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateCheckoutPermit } = checkoutPermitSlice.actions;

export default checkoutPermitSlice.reducer;
