import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import "../Cart/Cart.css"

const CartItem =(cart) =>{
    const {removeItem} = useContext(cartContext)
    return(
        <div className="cartItem">
        <img src={cart.pictureUrl} alt={cart.title} className="imgCart"/>
        <div>
            <h3 className="titulo">{cart.title}</h3>
            <p> Cantidad: {cart.count}</p>
            <p> Precio por unidad : ${cart.price.toLocaleString('de-DE')} </p>
            <p> Total: ${(cart.price * cart.count).toLocaleString('de-DE')}</p>
        </div>
        <button className="css-button-sliding-to-top--green" onClick={()=>removeItem(cart.id)}>Eliminar</button>
    </div>
    )
}

export default CartItem