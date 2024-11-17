
import { addBuyer } from "../firebase/db"
import { serverTimestamp } from "firebase/firestore"
import { useContext } from "react"
import { cartContext } from "../context/cartContext"
import styles from "./form.module.css"

export function Form(cart) {
    const {getTotal} = useContext(cartContext)
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
        addBuyer(order)
    }

    return ( 
        <>
            <h1 className={styles.title}> Formulario para completar su compra </h1>
            <form className={styles.form} onSubmit={haddleSubmit}>
                <input className={styles.input} type="text"   placeholder="Nombre" required/> 
                <input className={styles.input} type="email"  placeholder="Email" required/>
                <input className={styles.input} type="text" placeholder="Numero telefonico" required />
                    <div className={styles.submit}> 
                        <button className={styles.submitButton} type="submit"> Finalizar compra </button>
                    </div>
            </form>
        </>
    )
}

export default Form