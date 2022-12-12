import React, { useContext } from "react";
import { Link } from "react-router-dom";

// context
import { cartContext } from "../../context/CartContextProvider";

// icons
import shopIcon from "./../../assets/icons/shop.svg";

// css
import "./../../css files/Navbar.css";

const Navbar = () => {
  const { state } = useContext(cartContext);

  return (
    <div className="main-navbar d-flex justify-content-center shadow bg-body rounded fixed-top">
      <div className="d-flex justify-content-between main-navbar-inner align-items-center">
        <Link to="/products">Products</Link>
        <div className="position-relative">
          <Link to="/cart">
            <img className="navbarimg" src={shopIcon} style={{ width: "40px" }} />
          </Link>
          <span className="badge text-bg-secondary position-absolute">{state.itemsCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
