import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { getItem } from "../firebase/db";

function ItemDetailConteiner() {
    const [detail, setDetail] = useState()
    const { id } = useParams();

    useEffect (() => {
        getItem(id)
        .then(res => setDetail(res))
    },[id])

    return (

        <div>
        {detail ? (
            <ItemDetail
                detail={detail}
                title={detail.title}
                img={detail.img}
                price={detail.price}
            />
        ): (
            <p>Producto no encontrado.</p>
        )}
        </div>
    );
}

export default ItemDetailConteiner;