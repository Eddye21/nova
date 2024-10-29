
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import styles from "./item.module.css"

function Item ({item}) {
    return (
        <>
            <section className="conteiner">
                <section className={styles.card}>
                    <div>
                        <img src={item.img} alt="" />
                    </div>
                    <div>
                        <h3>
                            Modelo: {item.title}
                        </h3>
                    </div>
                    <div>
                        Precio: <p>{item.price}</p>
                        <p>{item.category}</p>
                    </div>
                    <Link to={`/item/${item.id}`}> Ver mas </Link>
                </section>
            </section>
        </>
    )
}

export default Item