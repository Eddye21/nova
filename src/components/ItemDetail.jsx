/* eslint-disable react/prop-types */
import { ItemCount } from "./ItemCount";
import styles from "./itemDetail.module.css"

function ItemDetail({ detail,title, img, price }) {

    return (
        <div className={styles.conteiner}>
            <img className={styles.img} src={img} alt="" />   
            <h2>{title}</h2>
            <p>Precio: ${price}</p>
            <ItemCount detail={detail}/>
        </div>
    );
}

export default ItemDetail