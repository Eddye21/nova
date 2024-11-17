import '../navbar.css'
import carLogo from '../icono-carrito.svg'
import { Link } from 'react-router-dom'

export function CarWitget() {
    return (
    <>
        <div className='car-conteiner' >
            <Link to='/cart'> <img src={carLogo} alt="imagen de carrito de compras" /> </Link>
            {/* <a href="..."><img className="carwitget" src={carLogo} alt="img" /></a> */}
            <span className="buble" > {14} </span>
        </div>
    </>
    )
}