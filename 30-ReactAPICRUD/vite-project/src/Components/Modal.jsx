import React, { useState, useEffect } from "react";

const Modal = ({ onCreate, onUpdate, currentProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (currentProduct) {
      setTitle(currentProduct.title);
      setPrice(currentProduct.price);
    }
  }, [currentProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentProduct) {
      onUpdate({ ...currentProduct, title, price });
    } else {
      const newProduct = { id: Date.now(), title, price };
      onCreate(newProduct);
    }
    setTitle("");
    setPrice("");
  };

  return (
    <div>
      <h2>{currentProduct ? "Məhsul Redaktə et" : "Yeni Məhsul Əlavə et"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Məhsul başlığı"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Qiymət"
        />
        <button type="submit">Yadda saxla</button>
      </form>
    </div>
  );
};

export default Modal;
