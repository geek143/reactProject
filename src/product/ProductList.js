import React, { useContext } from "react";
import ProductInfo from "./ProductInfo";
import { ProductContext } from '../context/ProductContext';

const ProductList = () => {
  
  const {products} = useContext(ProductContext);
  
  // const [add,setNumber] = useState(0);
  // useEffect(() => {
  //   return () => {
  //      console.log("Callback", product);
  //   }
  // },[product]);

  // useEffect(() => {
  //   return () => {
  //      console.log("Callback", add);
  //   }
  // },[add]);

  return products.length ? (
    <ul
      className={`pl-5 list-decimal pro ${products.length < 3 ? "red" : "blue"}`}
      style={{ fontSize: "16px" }}
    >
      {products.map( product => {
        return <ProductInfo product={product} key={product.id} />;
      })}
      {/* <button className="p-2" onClick={()=> setNumber(add + 1)} >Add {add}</button> */}
    </ul>
  ) : (
    <div className="text-center">No Porduct Found</div>
  );
};

export default ProductList;
