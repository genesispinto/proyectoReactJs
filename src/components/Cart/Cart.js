import {useContext} from "react"
import { cartContext } from "../context/cartContext"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"
import "../Cart/Cart.css"

const Cart = () =>{
    const {cart, clear} = useContext(cartContext)
    
    var total =0
    const componente1 = (
        <div className="carritoVacio">
            <h1>Carrito vacio</h1>
            <Link to="/"> Ir al inicio</Link>
        </div>
    )
    const total1 = () =>{
        cart.forEach(prod => {total += prod.count*prod.price})
        return(total)
    }

    total1()     
    const  componente2=(
        <div className="cart">
              {cart.map(prod => <CartItem key={prod.id} {...prod}/>)}  
            <div className="total">
                <p> Total compra: ${total.toLocaleString('de-DE')}</p>
                <button className="css-button-sliding-to-top--green" onClick={clear}>Limpiar Carrito</button>
                <Link to={`/datos-buyer/total=${total}`} className="css-button-sliding-to-top--green" > Seguir con la compra</Link>
            </div>
        </div>
    )
  
    return ((cart.length === 0) ? componente1 : componente2)

}

export default Cart