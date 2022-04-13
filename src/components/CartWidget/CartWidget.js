import imagenCarro from "./carrito1.png"
import "./CartWidget.css"

const CartWidget = () =>{
    return(
        <div id="carro">
        <img src={imagenCarro} id="ImagenCarro" alt="logo"></img>
        <p id="numeroCarro"> 6</p>
        </div>
        
    
    )

}
export default CartWidget