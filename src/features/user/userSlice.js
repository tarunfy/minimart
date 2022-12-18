import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //add a product to the cart
    //remove a product from the cart
    //clear cart
  },
  extraReducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
