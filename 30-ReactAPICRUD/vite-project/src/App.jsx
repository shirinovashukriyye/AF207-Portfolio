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
      toast.error("Məhsulların alınmasında xəta baş verdi!");
    } finally {
      setLoading(false);
    }
  };

  const onCreate = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    toast.success("Məhsul əlavə olundu!");
  };

  const onUpdate = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
    toast.success("Məhsul yeniləndi!");
  };

  const onDelete = (id) => {
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
    toast.success("Məhsul silindi!");
  };

  const onReset = () => {
    setProducts([]);
    toast.success("Bütün məhsullar sıfırlandı!");
  };

  return (
    <div>
      <ToastContainer />
      <button onClick={onReset}>Bütün Məhsulları Sıfırla</button>
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
