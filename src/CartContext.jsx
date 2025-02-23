
import React, { createContext, useState, useContext } from 'react';


const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (product) => {
    setCartProducts((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
      
      if (existingProductIndex >= 0) {
        
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        console.log(updatedCart)
        return updatedCart;
      } else {

        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartProducts((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cartProducts, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}


export const useCart = () => useContext(CartContext);
