
import { addBuyer } from "../firebase/db"
import { serverTimestamp } from "firebase/firestore"
import { useContext } from "react"
import { cartContext } from "../context/cartContext"
import Swal from "sweetalert2"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./form.module.css"

export function Form(cart) {
    const {getTotal, clearCart} = useContext(cartContext)
    const navigate = useNavigate()
    const formRef = useRef();
    const haddleSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        const [name, email, phone] = form

        const order = {
            buyer: {name: name.value, email: email.value, phone: phone.value},
            Items: cart,
            date: serverTimestamp(),
            total: getTotal()
        }
        addBuyer(order).then(docRefId => finishCheckout(docRefId))
    }

    const finishCheckout = (docRefId) => {
            Swal.fire({
                title: `Felicidades!!, Su numero de Pedido es ${docRefId}`,
                icon: "succes"
            })
            setTimeout(() => {
                navigate("/")
                eraserHaddler()
            }, 2000);
    }

    const eraserHaddler = () => {
        if (formRef.current) {
            formRef.current.reset()
        }
        clearCart()
    }

    return ( 
        <>
            <h1 className={styles.title}> Formulario para completar su compra </h1>
            <form ref={formRef} className={styles.form} onSubmit={haddleSubmit}>
                <input className={styles.input} type="text"   placeholder="Nombre" required/> 
                <input className={styles.input} type="email"  placeholder="Email" required/>
                <input className={styles.input} type="text" placeholder="Numero telefonico" required />
                    <div className={styles.submit}> 
                        <button  className={styles.submitButton} type="submit"> Finalizar compra </button>
                    </div>
            </form>
        </>
    )
}

export default Form