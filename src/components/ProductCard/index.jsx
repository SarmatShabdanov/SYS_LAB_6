import "./index.css"
export function ProductCard({ data, addToCart }) {
    return(
        <div className="product-card">
                            <img src={data.image} alt="" />
                            <p>{data.category}</p>
                            <span>{data.title}</span>
                            <div class = "pricing">
                            <span>${data.price}</span>
                            <button variant = 'bordered' onClick={() => addToCart(data)}>Add to Cart</button>
                            </div>
                            
        </div>
    )
}