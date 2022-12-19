import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
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
    addToCart(state, action) {
      const product = current(state).products.find(
        (p) => p.id == action.payload
      );
      if (product) {
        state.cart.push(product);
      }
    },

    //remove a product from the cart
    removeFromCart(state, action) {
      console.log(action.payload, current(state).cart);
      const filteredCart = current(state).cart.filter(
        (p) => p.id !== Number(action.payload)
      );
      console.log("filtered Cart", filteredCart);
      state.cart = filteredCart;
    },
    //clear cart

    //like a product
    addToWishlist(state, action) {
      const product = current(state).products.find(
        (p) => p.id === action.payload
      );
      if (product) {
        state.likedProducts.push(product);
      }
    },

    //remove from like list
    removeFromWishlist(state, action) {
      const filteredList = current(state).likedProducts.filter(
        (p) => p.id !== action.payload
      );
      state.likedProducts = filteredList;
    },

    //clear like list:
    clearWishList(state) {
      state.likedProducts = [];
    },
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

export const {
  addToWishlist,
  removeFromWishlist,
  clearWishList,
  removeFromCart,
  addToCart,
} = productSlice.actions;

export default productSlice.reducer;
