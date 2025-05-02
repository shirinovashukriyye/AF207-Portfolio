import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const notify = (text, type) =>
  toast(text, {
    type: type,
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

const initialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const product = action.payload;

      //Todo   eger wishlistde bu id li element yoxdusa wishliste elave et
      if (!state.items.some((item) => item.id === product.id)) {
        state.items.push(product);
        notify("Added to wishlist", "success");
      } else {
        //Todo  eger wishlistde bu id li element varsa wishlistden sil
        state.items = state.items.filter((item) => item.id !== product.id);
        notify("Removed from wishlist", "error");
      }
    },

    removeFromWishlist: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
    },

    deleteAllWishlist: (state) => {
      state.items = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, deleteAllWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
