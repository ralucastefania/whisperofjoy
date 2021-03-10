import React from "react";
import { Link } from "react-router-dom";
import "../style/ShoppingCartPopup.css";
import { WhisperContext } from "../App";

export default function ShoppingCartPopup() {
  const { dispatch, state } = React.useContext(WhisperContext);

  return (
    <div className="cart-popup">
      <label>Shoppig Cart</label>
      {state.shoppingCart.map((product) => {
          return (<div className="cart-element" key={product.id}><img src={product.img}></img><label>{product.title} - {product.id} </label></div>)
      } )}
    </div>
  );
}
