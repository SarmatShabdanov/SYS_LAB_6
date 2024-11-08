import "./index.css"
export function ProductCard(props) {
    return(
        <div className="product-card">
                            <img src={props.data.img} alt="" />
                            <h4>{props.data.name}</h4>
                            <span>{props.data.price}</span>
        </div>
    )
}