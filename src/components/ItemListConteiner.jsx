/* eslint-disable react/prop-types */
import '../navbar.css'

export function ItemListConteiner ({text}) {
    return (
        <section className='principal-conteiner'>
            <h1> {text} </h1>
        </section>
    )
}