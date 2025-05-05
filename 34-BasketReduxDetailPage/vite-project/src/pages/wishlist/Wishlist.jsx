import React, { useState } from "react";
import "./Wishlist.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAllWishlist,
  removeFromWishlist,
} from "../../redux/features/WishlistSlice";
import { toast } from "react-toastify";

const Wishlist = () => {
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
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromWishlist(productId));
    notify("Removed from wishlist", "error");
  };

  const handleDeleteAll = () => {
    dispatch(deleteAllWishlist());
    notify("Deleted all wishlist", "error");
  };

  return (
    <div>
      <h1 className="wishlist-head">Your Wishlist</h1>
      <div className="container">
        {wishlist.length === 0 ? (
          <p className="empty">Your wishlist is empty...</p>
        ) : (
          <div className="wishlist">
            {wishlist.map((product) => (
              <div className="wishlist-item" key={product.id}>
                <div className="image">
                  <img src={product.image} alt={product.title} />
                </div>
                <h5 className="title">{product.title}</h5>
                <p className="category">{product.category}</p>
                <p className="price">{product.price}</p>
                <button
                  className="btn btn-danger remove-btn"
                  onClick={() => handleRemove(product.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div>
              <button
                className="btn btn-danger remove-btn"
                onClick={handleDeleteAll} 
              >
                Delete All
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
