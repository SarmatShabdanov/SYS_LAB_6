import { useEffect, useState } from "react";
import { ProductCard } from "./components/ProductCard";

const products = [];

export function App(props) {
    const[loading,setLoading] = useState(true)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .finally(()=> setLoading(false));
  }, []);

  return (
    <div class = "cont">
      {products.map((product) => (
        <ProductCard data={product} />
      ))}
    </div>
  );
}
