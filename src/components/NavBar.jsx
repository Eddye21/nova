import { CarWitget } from './CarWidget'
import {Link} from "react-router-dom"
import '../navbar.css'

export function NavBar () {
    return (
        <section className='navbar-nova'>
            <div>
                <Link className='title' to="/"> <h1>Nova</h1></Link>
            </div>
            <div>
                <ul className='products' >
                    <Link className='product-item' to='category/automoviles'> Automoviles </Link>
                    <Link className='product-item' to='category/motocicletas'> Motocicletas </Link>
                    <Link className='product-item' to='category/suv'> SUV </Link>
                </ul>
            </div>
            <CarWitget/>
        </section>
    )
}

