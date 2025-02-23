
import React from "react";
import { Incrementer } from "../Incrementer";
import { useCart } from "../../CartContext";
import "./index.css";

export function ProductCard({ data }) {
  const { addToCart } = useCart(); 

  return (
    <div className="product-card">
      <img src={data.image} alt="" />
      <p>{data.category}</p>
      <span>{data.title}</span>
      <div className="pricing">
        <span>${data.price}</span>
        <button onClick={() => addToCart(data)}>Add to Cart</button>
        <Incrementer visibility="hidden" />
      </div>
    </div>
  );
}
