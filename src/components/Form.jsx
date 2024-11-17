
import { addBuyer } from "../firebase/db"
import { serverTimestamp } from "firebase/firestore"
import { useContext } from "react"
import { cartContext } from "../context/cartContext"

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
        <form onSubmit={haddleSubmit}>
            <h1> Formulario para completar su compra </h1>
            <input type="text"   placeholder="Nombre" required/> 
            <input type="email"  placeholder="Email" required/>
            <input type="text" placeholder="Numero telefonico" required />
                <div> 
                    <button type="submit"> Finalizar compra </button>
                </div>
        </form>
    )
}

export default Form