import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cart: [],
  isFetching: false,
  error: null,
};

//async thunk call for posts:

//async thunk call for post in specific categories:

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    //add a product to the cart
    //remove a product from the cart
    //clear cart
  },
  extraReducers: {},
});

export const {} = productSlice.actions;

export default productSlice.reducer;
