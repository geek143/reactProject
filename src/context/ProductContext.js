import React, { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setProduct] = useState([
    {
      id: 1,
      title: "Product Title 1",
      price: 200,
    },
    {
      id: 2,
      title: "Product Title 2",
      price: 400,
    },
  ]);

  const addProducts = (title, price) => {
    setProduct([...products, { title, price, id: Math.random() }]);
  };

  const removeProducts = (id) => {
    setProduct(products.filter(product => product.id !== id))
  }

  return (
    <ProductContext.Provider value={{products, addProducts, removeProducts }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
