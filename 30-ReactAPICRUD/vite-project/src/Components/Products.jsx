import React from "react";
import Product from "./Product";
import Modal from "./Modal";

const Products = ({
  products,
  loading,
  onCreate,
  onUpdate,
  onDelete,
  setIsModalOpen,
  setCurrentProduct,
}) => {
  return (
    <div>
      {loading && <p>Loading...</p>}
      <div>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onUpdate={onUpdate}
            onDelete={onDelete}
            setIsModalOpen={setIsModalOpen}
            setCurrentProduct={setCurrentProduct}
          />
        ))}
      </div>
      <Modal onCreate={onCreate} onUpdate={onUpdate} />
    </div>
  );
};

export default Products;
