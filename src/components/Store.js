import React, { useContext } from "react";

// contexts
import { ProductsContext } from "../context/ProductContextProvider";

// components
import Product from "./shared/Product";

const Store = () => {
  const products = useContext(ProductsContext);

  return (
    <div className="row d-flex justify-content-center">
      {products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default Store;
