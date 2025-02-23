import { useState } from 'react';
import './index.css';

export function Incrementer(props) {
    const [quantity, setQuantity] = useState(1);
    const {visibility} = props;
    const className = `incrementer-cont incrementer-cont--${visibility}`
    const addProduct = () => {
       setQuantity(prevQuantity => prevQuantity + 1);
       
    };
    const removeProduct = () => {
        if(quantity > 1){
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div className={className}>
            <button class='incrementer-button' onClick={removeProduct}>-</button>
            <span>{quantity}</span>
            <button class='incrementer-button' onClick={addProduct}>+</button>
        </div>
    );
}
