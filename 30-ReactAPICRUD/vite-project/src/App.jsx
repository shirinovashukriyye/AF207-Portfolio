import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Products from "./Components/Products";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      toast.error("There was an error purchasing the products.!");
    } finally {
      setLoading(false);
    }
  };

  const onCreate = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    toast.success("Added product!");
  };

  const onUpdate = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
    toast.success("Update product!");
  };

  const onDelete = (id) => {
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
    toast.success("Product deleted!");
  };

  const onReset = () => {
    setProducts([]);
    toast.success("Clear all products!");
  };

  return (
    <div>
      <ToastContainer />
      <button onClick={onReset}>Clear all products</button>
      <Products
        products={products}
        loading={loading}
        onCreate={onCreate}
        onUpdate={onUpdate}
        onDelete={onDelete}
        setIsModalOpen={setIsModalOpen}
        setCurrentProduct={setCurrentProduct}
      />
    </div>
  );
};

export default App;
