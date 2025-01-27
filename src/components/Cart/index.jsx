import "./index.css"
import { Incrementer } from "../Incrementer"
export function Cart(props) {
    return(
        <div class="cart">
            <img src={props.data.image} alt="" />
            <div class =  'cart-info'>
                <p class = 'category'>{props.data.category}</p>
                <p class = 'title'>{props.data.title}</p>
                <p class = 'price'>${props.data.price}</p>
                <Incrementer></Incrementer>
            </div>
                            
                             
        </div>
        
    )
}