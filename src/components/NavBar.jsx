import { CarWitget } from './CarWidget'
import '../navbar.css'

export function NavBar () {
    return (
        <section className='navbar'>
            <div>
                <a className='title' href="..."><h1> Nova </h1></a>
            </div>
            <div>
                <ul className='products' >
                    <li> <a className='product-item' href="..."> Camisetas </a > </li>
                    <li> <a className='product-item' href="..."> Pantalones </a > </li>
                    <li> <a className='product-item' href="..."> Vestidos </a> </li>
                </ul>
            </div>
            <CarWitget/>
        </section>
    )
}

