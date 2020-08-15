import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Swal from "sweetalert2";
import { ReactComponent as Login } from '../images/login.svg';

const ProductInfo = ({ product }) => {
  const { removeProducts } = useContext(ProductContext);
  const delPro = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this imaginary file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        removeProducts(product.id);
        Swal.fire("Deleted!", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  };
  return (
    <li key={product.id}>
      <Login width="50" />
      <h3>{product.title}</h3>
      <p>Price ${product.price}</p>
      <button onClick={delPro}>X</button>
    </li>
  );
};

export default ProductInfo;
