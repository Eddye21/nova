import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import ItemList from "./ItemList"
import styles from "./itemListConteiner.module.css"
import { getData, filterCategory } from '../firebase/db'
import { PacmanLoader } from 'react-spinners'


function ItemListConteiner() {
    const [items, setItems] = useState([]);

    const {id} = useParams()

    useEffect(() => {

        if (!id) {
            getData()
            .then(res => setItems(res))
        } else {
            filterCategory(id)
            .then(res => setItems(res))
        }

    }, [id]);

    return (
        <>
            {items?.length > 0 ? 
            <div className={styles.principal}> <ItemList  items={items}/></div> 
            : <div className={styles.principal}> <PacmanLoader/> </div>}
        </>
    )
}

export default ItemListConteiner;
