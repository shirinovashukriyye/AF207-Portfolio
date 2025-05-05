import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/ProductSlice";
import wishlistSlice from "../features/WishlistSlice";
import basketSlice from "../features/BasketSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, basketSlice);

const store = configureStore({
  reducer: {
    products: productsSlice,
    wishlist: wishlistSlice,
    basket: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
