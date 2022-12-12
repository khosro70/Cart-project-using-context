import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

// css files
import "./css files/App.css";

//components
import ProductDetails from "./components/ProductDetails";
import Store from "./components/Store";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";

// context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";

const App = () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <div className="container">
          <Switch> 
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" component={Store} />
            <Route path="/cart" component={ShopCart} />
            <Redirect to="/products" />
          </Switch>
        </div>
      </CartContextProvider>
    </ProductContextProvider>
  );
};

export default App;
