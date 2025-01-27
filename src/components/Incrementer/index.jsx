import { useState } from 'react';
import './index.css';

export function Incrementer() {
    const [quantity, setQuantity] = useState(1);
    const addProduct = () => {
       setQuantity(prevQuantity => prevQuantity + 1);
       
    };
    const removeProduct = () => {
        if(quantity > 1){
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div className='incrementer-cont'>
            <button className='incrementer-button' onClick={removeProduct}>-</button>
            <span>{quantity}</span>
            <button className='incrementer-button' onClick={addProduct}>+</button>
        </div>
    );
}
