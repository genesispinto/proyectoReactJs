import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = (props)=>{
    return(
        <div className="productos">
            <h1>{props.title}</h1>
            <ItemCount stock1= {10} initial = {0}/>
                
        </div>
        
        
    )
}
export default ItemListContainer