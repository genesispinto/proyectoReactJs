import imagenCarro from "./carrito1.png"
import "./CartWidget.css"
import { cartContext } from "../context/cartContext"
import {useContext } from "react"
import { Link } from "react-router-dom"

const CartWidget = () =>{
    const {contador} = useContext(cartContext)
    console.log(contador)
    return(
        <div id="carro">
       <Link to={"/cart"}><img src={imagenCarro} id="ImagenCarro" alt="logo"></img></Link> 
       {(contador == 0) ? null : <p id="numeroCarro">{contador}</p>}
        
        </div>
        
    
    )

}
export default CartWidget