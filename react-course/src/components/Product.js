import React from "react";

const Product = props => (
  <div className="product-component">
    <h1>{props.name}</h1>
    <p>{props.price}</p>
    <p>{props.description}</p>
  </div>
);

export default Product;
