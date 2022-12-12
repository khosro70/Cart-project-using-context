import React, { useContext } from "react";
import { Link } from "react-router-dom";

// context
import { ProductsContext } from "../context/ProductContextProvider";

// css
import "./../css files/ProductDetails.css";

const ProductDetails = (props) => {
  const data = useContext(ProductsContext);
  const id = props.match.params.id;
  const product = data[id - 1];
  const { title, price, description, category, image } = product;

  return (
    <div className="d-flex justify-content-between align-items-center main-div p-3 border border-secondary">
      <img src={image} className="col-4" />
      <div className="border border-secondary p-4">
        <h3 className="mb-4">{title}</h3>
        <p>{description}</p>
        <p className="fw-bold">
          <span className="text-warning">category: </span>
          {category}
        </p>
        <div className="d-flex justify-content-between">
          <span className="btn btn-success">{price} $</span>
          <Link className="btn btn-primary me-3" to="/products">
            Back to shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
