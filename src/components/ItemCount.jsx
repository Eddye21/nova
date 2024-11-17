import { useEffect, useState } from "react"
import styles from "./itemCount.module.css"
// import {useNavigate} from 'react-router-dom'

export function ItemCount () {
    const [counter, setCounter] = useState(0)
    // const navigate = useNavigate()

    useEffect( () => { 
        console.log("count")
    },[counter])
    
    const haddleMinus = () => setCounter(counter - 1)
    const haddlePlus = () => setCounter(counter + 1)
    // const haddleAdd = () => navigate("/")
    
    if(counter == -1){
        setCounter(0)
    }

    return (
        <>
            <p>{counter}</p>
            <div className={styles.counter}>
            <button className={styles.minus} onClick={haddleMinus}> - </button>
            <button className={styles.add}> Agregar al carrito </button>
            <button className={styles.plus} onClick={haddlePlus}> + </button>
            </div>
        </>
    )
}