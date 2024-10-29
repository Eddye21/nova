/* eslint-disable react/prop-types */
import { ItemCount } from "./ItemCount";
import styles from "./itemDetail.module.css"

function ItemDetail({ title, img, price }) {
    return (
        <div className={styles.conteiner}>
            <img src={img} alt="" />   
            <h2>{title}</h2>
            <p>Precio: ${price}</p>
            <ItemCount/>
        </div>
    );
}

export default ItemDetail