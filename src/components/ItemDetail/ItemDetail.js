import ItemCount from "../ItemCount/ItemCount"
import "../ItemDetail/ItemDetail.css"

const ItemDetail = (props) =>{

    const handlerOnAdd = (quantity) =>{
        console.log(`Se agregaron al carrito : ${quantity} unidades`)
       }
    return(
        <div className="itemDetail">
            <img src={props.producto.pictureUrl} alt={props.producto.title} className="imgDetail"/>
            <p className="nombreProducto">{props.producto.title}</p>
            <p className="descriptionProducto">{props.producto.description}</p>
            <ItemCount stock1= {10} initial = {0} onAdd= {handlerOnAdd} className="itemCount"/> 
            
        </div>
    )
}
export default ItemDetail