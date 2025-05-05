import React, { useEffect } from "react";
import "./Products.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/features/ProductSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { addToWishlist } from "../../redux/features/WishlistSlice";
import { toast } from "react-toastify";
import { addBasket } from "../../redux/features/BasketSlice";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);
  const wishlist = useSelector((state) => state.wishlist.items);
  console.log(products);

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

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const isProductInWishlist = (id) => wishlist.some((item) => item.id === id);

  const handleAdd = (e, product) => {
    e.stopPropagation();
    dispatch(addToWishlist(product));
  };
  const addToBasket = (e, product) => {
    e.stopPropagation();
    dispatch(addBasket(product));
    notify("Added to Basket", "success");
  };

  return (
    <div>
      <h1>Products</h1>
      <div className="cards">
        {products.map((product) => (
          <div key={product.id}>
            <Card
              className="card"
              onClick={() => navigate(`/productDetail/${product.id}`)}
            >
              <CardActionArea>
                <div
                  className="heartIcon"
                  onClick={(e) => handleAdd(e, product)}
                >
                  {isProductInWishlist(product.id) ? (
                    <FaHeart size="20px" color="red" />
                  ) : (
                    <FaRegHeart size="20px" />
                  )}
                </div>
                <div className="card-image">
                  <CardMedia
                    className="img"
                    component="img"
                    image={product.image}
                    alt="product"
                  />
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h5>{product.title.slice(0, 20) + "..."}</h5>
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    <h6>{product.category}</h6>
                  </Typography>
                  <Typography
                    className="cardPrice"
                    gutterBottom
                    variant="span"
                    component="div"
                  >
                    <span>$ {product.price}</span>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <div className="card-footer">
                <Stack spacing={2} direction="row">
                  <Button
                    className="card-button"
                    variant="contained"
                    onClick={(e) => addToBasket(e, product)}
                  >
                    Add Basket
                  </Button>
                </Stack>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
