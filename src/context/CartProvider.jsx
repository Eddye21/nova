/* eslint-disable react/prop-types */
import { cartContext } from "./cartContext";
import {useState} from 'react'

function CartProvider ({children}) {
    const [cart, setCart] = useState([])
    
    const addToCart = item => setCart([...cart, item]) 

    const totalQty = () => {
        const qtyOnly = cart.map(item => item.qty)
        const total = qtyOnly.reduce((acc, current) => acc + current, 0)
        return total
    }

    const clearCart = () => setCart([])

    const getTotal = () => {
        const priceOnly = cart.map(item => item.price*item.qty)
        const total = priceOnly.reduce((acc, current) => acc + current, 0)
        return total
    }

    return (
        <cartContext.Provider value={{cart, addToCart, totalQty, getTotal, clearCart}}> 
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider