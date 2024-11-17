import { useCart } from "../context/cartContext"
import { useNavigate } from "react-router-dom"
import trashLogo from "../icono-basura.svg"
import styles from "./cart.module.css"
import Form from './Form'

function Cart() {
    const {cart, getTotal, clearCart} = useCart()

    const navigate = useNavigate()
    const haddleGoBack = ()  => navigate("/")
    const haddleErase = () => clearCart()

    return (
        <> 
            <div className={styles.container}>
                <div>
                    <img onClick={haddleErase} src={trashLogo} alt="Icono para eliminar todo del carrito" />
                </div>
                <div>
                    {cart.map(prod =>
                        <div key={prod.id}> 
                            <p className={styles.font}> {prod.title} x {prod.qty} </p>
                        </div>)}
                    <p> {getTotal()} </p>
                </div>
                {cart.length > 0 ? <Form cart={cart}/> : <p> Carrito vacio </p> }
                <div>
                    <button onClick={haddleGoBack}> Ir a pagina inicio </button>
                </div>
            </div>
        </>
    )
}


export default Cart
