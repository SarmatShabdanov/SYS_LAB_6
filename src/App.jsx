import { useState } from "react";
import { ProductCard } from "./components/ProductCard";


const products = 
[
    {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDnDmOn2CgBYYBjjMiQWd8T-vb1rlBorPdZw&s",
    name:"Brabus",
    price: 190000
    },

    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKFSiVBoOvjZWhxA5LWVrQrKAmC2PQPX9DKg&s",
        name:"BMW",
        price: 100000
    }

]

export function App(props) {
    return (
        <div>
        {products.map((product) => (
                        <ProductCard data = {product} />
                    ))}
        </div>
        
    );
}