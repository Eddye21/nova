import '../navbar.css'
import { useState, useEffect } from "react";
import { products } from "../db/products";
import { useParams } from 'react-router-dom';
import ItemList from "./ItemList";
import styles from "./itemListConteiner.module.css"
import { PacmanLoader } from 'react-spinners';


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
        <>
            {
                items.length > 0 ? 
                    <div className={styles.principal}> 
                        <ItemList  items={items}/>
                    </div> :
                    <div className={styles.principal}>
                        <PacmanLoader/>
                    </div>
            }
        </>
    )
}

export default ItemListConteiner;
