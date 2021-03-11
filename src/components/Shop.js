import React from "react";
import "../style/Shop.css";
import Product from "../components/Product";
import { WhisperContext } from "../App";

export default function Shop() {
  const { dispatch, state } = React.useContext(WhisperContext);

  let noStock = false
  if (state.products === undefined || state.products.length === 0) noStock = true
  return (
    <div className="shop-page">
      {noStock ? <label> no stuff </label> : state.products.map((product) => {
        return <Product data={product} key={product.id}/>;
      })}
    </div>
  );
}
