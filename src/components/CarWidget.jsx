import '../navbar.css'
import carLogo from '../icono-carrito.svg'

export function CarWitget() {
    return (
    <>
        <div className='car-conteiner' >
            <a href="..."><img className="carwitget" src={carLogo} alt="img" /></a>
            <span className="buble" > {1} </span>
        </div>
    </>
    );
}
