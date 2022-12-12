import React, { useContext } from "react";

// context
import { cartContext } from "../../context/CartContextProvider";

// function
import { shorten } from "./../../helpers/functions";

// icons
import trashIcon from "./../../assets/icons/trash.svg";

// css
import "./../../css files/Card.css";

const Cart = (props) => {
  const { image, title, price, quantity } = props.data;
  const { state, dispatch } = useContext(cartContext);
  return (
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-between align-items-center px-5 border border-success border-opacity-50 mb-2 row py-2 text-center me-2">
      <img className="col-12 col-md-3" src={image} style={{ width: "120px" }} />
      <div className="col-12 col-md-3">
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>
      <div className="col-12 col-md-3 mb-2 mb-md-0">
        <span className="btn btn-warning">{quantity}</span>
      </div>
      <div className="col-12 col-md-3">
        {quantity > 1 ? (
          <button
            className="btn btn-info"
            style={{ padding: "6px 14px" }}
            onClick={() => dispatch({ type: "DECREASE", payload: props.data })}
          >
            -
          </button>
        ) : (
          <button
            className="btn btn-info btnTrash"
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: props.data })
            }
          >
            <img
              src={trashIcon}
              className="imgTrash"
              style={{ width: "25px" }}
            />
          </button>
        )}
        <button
          className="btn btn-info"
          style={{ marginLeft: "2px" }}
          onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Cart;
