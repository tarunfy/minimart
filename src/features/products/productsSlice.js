import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { myAxios } from "../../api/config";

const initialState = {
  products: [],
  cart: [],
  likedProducts: [],
  isFetching: false,
  error: null,
};

//async thunk call for posts:
export const getAllProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const res = await myAxios.get("/products");
      return [...res.data];
    } catch (err) {
      return err.message;
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    //add a product to the cart
    //remove a product from the cart
    //clear cart
    //like a product
    //remove from like list
  },
  extraReducers(builder) {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isFetching = false;
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.payload;
      });
  },
});

export const productsSelector = (state) => state.products;

export const {} = productSlice.actions;

export default productSlice.reducer;
