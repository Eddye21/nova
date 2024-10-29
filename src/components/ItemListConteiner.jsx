import '../navbar.css'
import { useState, useEffect } from "react";
import { products } from "../db/products";
import { useParams } from 'react-router-dom';
import ItemList from "./ItemList";
import styles from "./itemListConteiner.module.css"

function ItemListConteiner() {
    const [items, setItem] = useState([]);

    const {id} = useParams()

    const getProducts = () =>
    new Promise((res) => {
        setTimeout(() => res(products), 2000);
    });

    useEffect(() => {
        getProducts().then((res) => {
            let filteredItems = res; 
    
            if (id) {
                filteredItems = res.filter(item => item.category === id);
            }
    
            setItem(filteredItems);
        });
    }, [id]);

    return (
        <div className={styles.conteiner}> 
            <ItemList  items={items}/>
        </div>
    )
}

export default ItemListConteiner;
