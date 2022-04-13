import ItemCount from "../ItemCount/ItemCount"
import {useState} from "react"
import "../ItemDetail/ItemDetail.css"
import { Link } from "react-router-dom"

const ItemDetail = ({pictureUrl, title, description}) =>{
    const [count, setCount]= useState()
    const [typeInput, setTyInput]= useState ('true') 

    const handlerOnAdd = (quantity) =>{
        setCount(quantity)
        setTyInput(!typeInput)
    
       }
    return(
        <div className="itemDetail">
            <img src={pictureUrl} alt={title} className="imgDetail"/>
            { typeInput ? <ItemCount stock1= {10} initial = {0} onAdd= {handlerOnAdd} className="itemCount"/> :<Link to="/cart/finalizarCompra" className="btn1"> Terminar compra</Link>} 
            <div className="detalle">
                <h1 className="nombreProducto">{title}</h1> <br/>
                <p className="descriptionProducto">{description}</p>
            </div>
           {/* { swal(`Se agregaron al carrito : ${count} unidades`)} */}
           <p>Se agregaron al carrito : {count} unidades</p>
        </div>
    )
}
export default ItemDetail