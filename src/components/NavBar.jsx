import { CarWitget } from './CarWidget'
import {Link} from "react-router-dom"
import '../navbar.css'

export function NavBar () {
    return (
        <section className='navbar'>
            <div>
                {/* <a className='title' href="..."><h1> Nova </h1></a> */}
                <Link className='title' to="/"> <h1>Nova</h1></Link>
            </div>
            <div>
                <ul className='products' >
                    {/* // <li> <a className='product-item' as={Link} to="/category/automoviles" > Automoviles </a > </li>
                    // <li> <a className='product-item' as={Link} to="/category/motocicletas" > Motocicletas </a > </li>
                    // <li> <a className='product-item' as={Link} to="/category/suv" > SUV </a> </li> */}
                    <Link className='product-item' to='category/automoviles'> Automoviles </Link>
                    <Link className='product-item' to='category/motocicletas'> Motocicletas </Link>
                    <Link className='product-item' to='category/suv'> SUV </Link>
                </ul>
            </div>
            <CarWitget/>
        </section>
    )
}

