import "./Item.css"
const Item = ({title, pictureUrl}) =>{
    return(
        <div className="card">
            <img src={pictureUrl} alt={title} className="imgCard"/>
            <h3 className="titulo">{title}</h3>
            <button className="btn1"> Ver Detalle</button>
            
        </div>

    )
}

export default Item