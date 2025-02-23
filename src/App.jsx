// App.jsx
import { useEffect, useState } from "react";
import { ProductCard } from "./components/ProductCard";
import { Button } from "./components/Button";
import { Cart } from "./components/Cart";
import React from "react";
import { CartProvider } from "./CartContext"; 

export function App(props) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .finally(() => setLoading(false));
  }, []);

  const Filter = (category) => {
    setFilter(category);
  };

  const filteredProducts = filter
    ? products.filter((item) => item.category.toLowerCase() === filter.toLowerCase())
    : products;

  return (
    <CartProvider>
      <div>
        <div className="button-cont">
          <Button type="bordered" onClick={() => Filter("men's clothing")}>
            Men's Clothing
          </Button>
          <Button type="bordered" onClick={() => Filter("women's clothing")}>
            Women's Clothing
          </Button>
          <Button type="bordered" onClick={() => Filter("jewelery")}>
            Jewelry
          </Button>
          <Button type="bordered" onClick={() => Filter("electronics")}>
            Electronics
          </Button>
        </div>

        <div className="cont">
          {loading ? (
            <div>Loading...</div>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))
          )}
        </div>

        <div className="cart-title">
          <p>Cart</p>
        </div>

        <div className="cart-cont">
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
}
