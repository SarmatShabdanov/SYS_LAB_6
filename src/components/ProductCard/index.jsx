import "./index.css"
import { Button } from "../Button";
export function ProductCard({ data, addToCart }) {
    return (
      <div className="product-card">
        <img src={data.image} alt={data.title} />
        <div className="product-info">
          <p className="category">{data.category}</p>
          <p className="title">{data.title}</p>
          <p className="price">${data.price}</p>
          <Button variant = 'bordered' onClick={() => addToCart(data)}>Add to Cart</Button>
        </div>
      </div>
    );
  }
  