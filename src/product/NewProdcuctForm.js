import React, { useState,useContext } from "react";
import { ProductContext } from '../context/ProductContext';
import {  useHistory } from "react-router-dom";

const NewProdcuctForm = () => {

  const {addProducts} = useContext(ProductContext);
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addProducts(title, price);
    // console.log(title, price);
    setTitle("");
    setPrice("");
    history.push("/");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        className="p-2 border"
        placeholder="Enter Title"
      />
      <input
        type="text"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        className="p-2 mx-2 border"
        placeholder="Enter Price"
      />
      <input
        type="submit"
        value="Add Product"
        className="px-4 py-2 uppercase"
      />
    </form>
  );
};

export default NewProdcuctForm;
