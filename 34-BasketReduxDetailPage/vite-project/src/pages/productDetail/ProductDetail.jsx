import React, { useState } from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/features/ProductSlice";
import { addBasket } from "../../redux/features/BasketSlice";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const findProduct = products.find((product) => product.id === id);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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

  const handlePlus = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const handleAddToBasket = () => {
    if (findProduct) {
      dispatch(addBasket({ ...findProduct, quantity }));
      notify("Added to Basket", "success");
    }
  };
  return (
    <div className="container">
      <div className="detailDiv">
        <div className="product-image">
          <img className="img" src={findProduct.image} alt="Product Image" />
        </div>

        <div className="product-details">
          <h4 className="product-title">{findProduct.title}</h4>
          <p className="product-category">Category: {findProduct.category}</p>
          <p className="product-price">${findProduct.price}</p>
          <p className="product-description">{findProduct.description}</p>

          <div className="product-rating">
            <span>⭐ {findProduct.rating.rate}</span>
            <span>({findProduct.rating.count} reviews)</span>
          </div>

          <div className="quantity-selector">
            <button
              className="btn-minus"
              onClick={handleMinus}
              disabled={quantity <= 1}
            >
              -
            </button>
            <input type="number" value={quantity} min="1" readOnly   />
            <button className="btn-plus" onClick={handlePlus}>
              +
            </button>
          </div>

          <button
            className="btn btn-danger add-to-cart-btn"
            onClick={handleAddToBasket}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
