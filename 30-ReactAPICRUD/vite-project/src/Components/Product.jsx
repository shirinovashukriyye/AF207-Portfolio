import React from "react";

const Product = ({ product, onUpdate, onDelete, setIsModalOpen, setCurrentProduct }) => {
  return (
    <div>
      <h3>{product.title}</h3>
      <p>{product.price} AZN</p>
      <button
        onClick={() => {
          setCurrentProduct(product);
          setIsModalOpen(true);
          onUpdate(product.id);
        }}
      >
       Edit
      </button>
      <button onClick={() => onDelete(product.id)}>Sil</button>
    </div>
  );
};

export default Product;
