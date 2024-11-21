import "./index.css"
export function ProductCard(props) {
    return(
        <div className="product-card">
                            <img src={props.data.image} alt="" />
                            <p>{props.data.category}</p>
                            <h4>{props.data.title}</h4>
                            <div class = "pricing">
                            <span>${props.data.price}</span>
                            <button>Add to Cart</button>
                            </div>
                            
        </div>
    )
}