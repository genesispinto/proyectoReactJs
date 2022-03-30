import imagenCarro from "./carrito.png"
import NavBar from "../NavBar/NavBar";
// const divStyle = {
//     width: 50,
//   };

const CartWidget = () =>{
    return(
        <div id="carro">
        <img src={imagenCarro} id="ImagenCarro" alt="logo"></img>
        <p id="numeroCarro"> 6</p>
        </div>
        
    
    )

}
export default CartWidget