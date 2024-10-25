import { useState, useEffect } from "react";
import { Cards } from "./Cards";

export function ItemList() {
    const [items, setItems] = useState([]);

    const getProducts = async () => {
        try {
            const response = await fetch("../db/products.js")
            const data = await response.json();
            setItems(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <Cards items={items} />
        </div>
    );
}