import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productList, updateProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => updateProducts(res.data));
  }, []);

  return (
    <ProductContext.Provider value={{ productList }}>
      {children}
    </ProductContext.Provider>
  );
};
