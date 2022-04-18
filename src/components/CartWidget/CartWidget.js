import imagenCarro from "./carrito1.png"
import "./CartWidget.css"
import { cartContext } from "../context/cartContext"
import {useContext } from "react"

const CartWidget = () =>{
    const {contador} = useContext(cartContext)
    console.log(contador)
    return(
        <div id="carro">
        <img src={imagenCarro} id="ImagenCarro" alt="logo"></img>
        <p id="numeroCarro">{contador}</p>
        </div>
        
    
    )

}
export default CartWidget