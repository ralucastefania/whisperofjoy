import React from "react";
import "../style/Product.css";
import { WhisperContext } from "../App";

export default function Product(props) {
  const { dispatch, state } = React.useContext(WhisperContext);
  let [product, ...rest] = state.products.filter((product) => {
    if (product.id == props.code) return product
  })
  return (
    <div className="product">
        <img src={product.img}></img>
        <label>{product.title} - {product.id}</label>
        <button onClick={()=>{
            dispatch({
                message: 'addProductInCart',
                code: product.code
            })
        }}>Buy</button>
    </div>
  );
}
