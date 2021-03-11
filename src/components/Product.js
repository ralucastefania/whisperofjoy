import React from "react";
import "../style/Product.css";
import { WhisperContext } from "../App";

export default function Product(props) {
  const { dispatch, state } = React.useContext(WhisperContext);
  let product = props.data
  return (
    <div className="product">
        <img src={product.img}></img>
        <label>{product.title} - {product.id}</label>
        <button onClick={()=>{
            console.log("onClick")
            dispatch({
                message: 'addProductInCart',
                code: product.id
            })
        }}>Buy</button>
    </div>
  );
}
