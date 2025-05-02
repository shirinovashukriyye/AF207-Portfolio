import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/ProductSlice";
import wishlistReducer from "../features/WishlistSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
