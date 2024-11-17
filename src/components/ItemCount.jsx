/* eslint-disable react/prop-types */
import { useState, useContext } from "react"
import styles from "./itemCount.module.css"
import { cartContext } from "../context/cartContext"
// import {useNavigate} from 'react-router-dom'

export function ItemCount ({detail}) {
    const [counter, setCounter] = useState(1)
    const {addToCart} = useContext(cartContext)
    // const navigate = useNavigate()

    const haddleMinus = () => setCounter(counter - 1)
    const haddlePlus = () => setCounter(counter + 1)
    const haddleToCart = () => addToCart({...detail, qty: counter})
    // const haddleAdd = () => navigate("/")
    
    if(counter == 0){
        setCounter(1)
    }

    return (
        <>
            <p>{counter}</p>
            <div className={styles.counter}>
            <button className={styles.minus} onClick={haddleMinus}> - </button>
            <button className={styles.add} onClick={haddleToCart}> Agregar al carrito </button>
            <button className={styles.plus} onClick={haddlePlus}> + </button>
            </div>
        </>
    )
}