import { useContext } from "react"
import { cartContext } from "../context/CartContext"

export const useCart = () => {
    return useContext(cartContext);
}