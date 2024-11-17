import '../navbar.css'
import carLogo from '../icono-carrito.svg'
import { useCart } from '../context/cartContext'
import { Link } from 'react-router-dom'

export function CarWitget() {

    const {totalQty} = useCart()

    return (
        <div className='car-conteiner' >
            <Link to='/cart'> <img src={carLogo} alt="imagen de carrito de compras" /> </Link>
                <span className="buble" > {totalQty()} </span>
        </div>
    )
}