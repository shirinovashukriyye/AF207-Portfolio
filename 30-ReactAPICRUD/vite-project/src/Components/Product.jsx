import React, { useState } from "react";

const Product = ({ product, onUpdate, onDelete, setIsModalOpen, setCurrentProduct }) => {

  return (
    <div>
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <button
        onClick={() => {
          setCurrentProduct(product);
          setIsModalOpen(true);
          onUpdate(product.id);
        }}
      >
       Edit
      </button>
      <button onClick={() => onDelete(product.id)}>Delete</button>
    </div>
  );
};

export default Product;
