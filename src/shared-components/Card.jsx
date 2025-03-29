import { useState } from "react";

const Card = (props) => {
  const { product } = props;

  console.log("product from the Card component", product)

  return (
    <>
    <div className="border border-red-500">
      <div>{product.genre}</div>
      <div>{product['product-name']}</div>
    </div>
    </>
  )

};

export default Card;