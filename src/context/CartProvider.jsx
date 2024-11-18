/* eslint-disable react/prop-types */
import { cartContext } from "./cartContext";
import {useState} from 'react'

function CartProvider ({children}) {
    const [cart, setCart] = useState([])
    
    const addToCart = (item) => {
        setCart((prevCart) => {
        const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
                return prevCart.map((cartItem) =>
                cartItem.id === item.id
                    ? { ...cartItem, qty: cartItem.qty + item.qty }
                    : cartItem
                );
            } else {
            return [...prevCart, item];
        }
        });
    };

    const totalQty = () => {
        const qtyOnly = cart.map(item => item.qty)
        const total = qtyOnly.reduce((acc, current) => acc + current, 0)
        return total
    }

    const clearCart = () => setCart([])

    const getTotal = () => {
        const priceOnly = cart.map(item => item.price*item.qty)
        const total = priceOnly.reduce((acc, current) => acc + current, 0)
        const roundedTotal = total.toFixed(3)
        return roundedTotal
    }

    return (
        <cartContext.Provider value={{cart, addToCart, totalQty, getTotal, clearCart}}> 
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider