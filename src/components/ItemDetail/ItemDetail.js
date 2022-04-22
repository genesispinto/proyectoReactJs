import ItemCount from "../ItemCount/ItemCount"
import {useState , useContext} from "react"
import { cartContext } from "../context/cartContext"
import "../ItemDetail/ItemDetail.css"
import { Link } from "react-router-dom"



const ItemDetail = ({pictureUrl, title, description, id, price}) =>{
    const [typeInput, setTyInput]= useState ('true') 
    const {AddItem} = useContext(cartContext) 

    const HandlerOnAdd = (count) =>{
        setTyInput(!typeInput)
        
        const productToAdd ={
            id, title, price, count, pictureUrl
        }
        AddItem(productToAdd)
    }
    return(
        <div className="itemDetail">
            <img src={pictureUrl} alt={title} className="imgDetail"/>
            { typeInput ? <ItemCount stock1= {10} initial = {0} onAdd= {HandlerOnAdd} className="itemCount"/> :<Link to="/Cart" className="btn1"> Terminar compra</Link>} 
            <div className="detalle">
                <h1 className="nombreProducto">{title}</h1> <br/>
                <p className="descriptionProducto">{description}</p>
            </div>

        </div>
    )
}
export default ItemDetail