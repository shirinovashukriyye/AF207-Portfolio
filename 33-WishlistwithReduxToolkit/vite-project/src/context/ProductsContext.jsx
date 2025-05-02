import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext();



export const ProductsProvider = ({ children }) => {
const [products, setProducts]= useState([])

const getProducts = async () => {

  const res = await axios.get("https://fakestoreapi.com/products");
  setProducts(res.data)
};



useEffect(()=>{
  getProducts()
},[])
console.log(products)
  return (
    <ProductsContext.Provider value={{products, setProducts}}>
      {children}
    </ProductsContext.Provider>
  );
};

export const ProductList =()=> useContext(ProductsContext)
