import "./Item.css"
import { Link } from "react-router-dom"
const Item = ({title, pictureUrl, id}) =>{
    return(
        <div className="card">
            <img src={pictureUrl} alt={title} className="imgCard"/>
            <h3 className="titulo">{title}</h3>
            <Link to={`/Item/${id}`} className="btn1"> Ver Detalle</Link>
            
        </div>

    )
}

export default Item