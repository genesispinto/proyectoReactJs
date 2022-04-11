import ItemCount from "../ItemCount/ItemCount"
import "../ItemDetail/ItemDetail.css"

const ItemDetail = ({pictureUrl, title, description}) =>{

    const handlerOnAdd = (quantity) =>{
        console.log(`Se agregaron al carrito : ${quantity} unidades`)
       }
    return(
        <div className="itemDetail">
            <img src={pictureUrl} alt={title} className="imgDetail"/>
            <ItemCount stock1= {10} initial = {0} onAdd= {handlerOnAdd} className="itemCount"/> 
            <div className="detalle">
                <h1 className="nombreProducto">{title}</h1> <br/>
                <p className="descriptionProducto">{description}</p>
            </div>
        </div>
    )
}
export default ItemDetail