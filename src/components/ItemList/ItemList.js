import Item from "../Item/Item"
import "../Item/Item.css"

const ItemList = (props) =>{
console.log(props)
    return(
        <div className="itemList">
            {props.productos.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
          
            
    )
}
export default ItemList