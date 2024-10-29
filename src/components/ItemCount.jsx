import { useEffect, useState } from "react"
import styles from "./itemCount.module.css"


export function ItemCount () {
    const [counter, setCounter] = useState(0)

    useEffect( () => { 
        console.log("count")
    },[counter])
    
    const haddleMinus = () => setCounter(counter - 1)
    const haddlePlus = () => setCounter(counter + 1)
    
    if(counter == -1){
        setCounter(0)
    }

    return (
        <>
            <p>{counter}</p>
            <div className={styles.counter}>
            <button className={styles.minus} onClick={haddleMinus}> - </button>
            <button className={styles.add} > agregar al carrito </button>
            <button className={styles.plus} onClick={haddlePlus}> + </button>
            </div>
        </>
    )
}