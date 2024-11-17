import { useParams } from "react-router-dom";
import {products} from "../db/products"
import ItemDetail from "./ItemDetail";

function ItemDetailConteiner() {
    const { id } = useParams();

    const product = products.find(product => product.id === parseInt(id));

    return (

        <div>
        {product ? (
            <ItemDetail
                detail={product}
                title={product.title}
                img={product.img}
                price={product.price}
            />
        ): (
            <p>Producto no encontrado.</p>
        )}
        </div>
    );
}

export default ItemDetailConteiner;