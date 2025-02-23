
import React from "react";
import { Incrementer } from "../Incrementer";
import { useCart } from "../../CartContext"; 
import { Button } from "../Button";
import "./index.css";

export function Cart() {
  const { cartProducts, removeFromCart } = useCart(); 

  return (
    <div class = 'cart-cont'>
      {cartProducts.length === 0 ? (
        <div>Your cart is empty.</div>
      ) : (
        cartProducts.map((product) => (
          <div className="cart" key={product.id}>
            <img src={product.image} alt="" />
            <div className="cart-info">
              <p className="category">{product.category}</p>
              <p className="title">{product.title}</p>
              <p className="price">${product.price}</p>

              <div class = 'place_cart'>
                <Incrementer visibility="visible" />
                <Button onClick={() => removeFromCart(product.id)}>Remove</Button>
              </div>
              
            </div>
          </div>
        ))
      )}
    </div>
  );
}
