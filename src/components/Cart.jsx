import { useCart } from "../context/cartContext"
import { useNavigate } from "react-router-dom"
import trashLogo from "../icono-basura.svg"
import styles from "./cart.module.css"
import Swal from 'sweetalert2'
import Form from './Form'



function Cart() {
    const {cart, getTotal, clearCart} = useCart()

    const navigate = useNavigate()
    const haddleGoBack = ()  => navigate("/")
    const haddleErase = () => clearCart()


    const alert = () => {
        Swal.fire({
            title: "El carrito esta vacio",
            icon: "error"})
    }


    return (
        <> 
            <div className={styles.container}>
                <div className={styles.delet}>
                    <img onClick={haddleErase} className={styles.logo} src={trashLogo} alt="Icono para eliminar todo del carrito" />
                </div>
                <div className={styles.products}>
                    {cart.map(prod =>
                        <div key={prod.id}> 
                            <p className={styles.font}> {prod.title} </p>
                            <p> Cantidad: {prod.qty} </p>
                        </div>)}
                        <div className={styles.total}>
                            <p> Total: {getTotal()} </p>
                        </div>
                </div>
                {cart.length > 0 ? <Form cart={cart}/> : <p> {alert()} </p> }
                <div className={styles.button}>
                    <button className={styles.buttonBack} onClick={haddleGoBack}> Ir a pagina inicio </button>
                </div>
            </div>
        </>
    )
}


export default Cart
