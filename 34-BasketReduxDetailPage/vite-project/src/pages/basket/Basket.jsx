import React from "react";
import "./Basket.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBasket,
  minusBtn,
  plusBtn,
} from "../../redux/features/BasketSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Basket = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.basket);
  console.log(products);

  const totalAmount = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
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

  const handleDeleteBasket = (product) => {
    dispatch(deleteBasket(product));
    notify("Removed from Basket", "error");
  };

  const handlePlus = (product) => {
    dispatch(plusBtn(product));
  };
  const handleMinus = (product) => {
    dispatch(minusBtn(product));
  };

  return (
    <div>
      <h1 className="wishlist-head">Your Basket</h1>
      <div className="container">
        <div className="basket">
          {products && products.length > 0 ? (
            products.map((product) => (
              <div className="basket-item" key={product.id}>
                <div className="image">
                <Link to={`/productDetail/${product.id}`}>
                <img src={product.image} alt="Product Image" /></Link>
                </div>
                <h6 className="title">{product.title.slice(0, 10) + "..."}</h6>
                <p className="category">{product.category}</p>
                <p className="price">
                  ${(product.price * product.quantity).toFixed(2)}
                </p>
                <div className="count-area">
                  <button
                    {...(product.quantity === 1 ? { disabled: true } : {})}
                    className="minus-btn"
                    onClick={() => handleMinus(product)}
                  >
                    -
                  </button>
                  <p className="count">{product.quantity}</p>
                  <button
                    className="plus-btn"
                    onClick={() => handlePlus(product)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="btn btn-danger remove-btn"
                  onClick={() => handleDeleteBasket(product)}
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p className="empty">Your Basket is Empty...</p>
          )}
        </div>
        <div className="bottom">
          <h4>
            Total: <span className="total-price">{totalAmount.toFixed(2)}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Basket;
