import { useState } from "react";
import "./ItemCount.css";

const ItemCount = (props) =>{

    const [count, setCount]= useState(props.initial)
    const [stock, setStock]= useState(props.stock1)

    const Decrement = ()=>{
        if(count >0) {
            setCount(count - 1)
            setStock(stock + 1)
        }

    }
    const Increment = ()=>{
        if (stock > 0){
            setCount(count + 1)
            setStock(stock - 1)
        }
        
    }
    const handleOnAdd = () =>{
        props.onAdd(count)
    }
    return(
        <div className="controlesProductos">
            <button onClick={Decrement}>-</button>
            <p>{count}</p>
            <button onClick={Increment}>+</button>
            <button className="agregaCarrito" onClick={handleOnAdd}>Agregar a Carrito</button>
            <p className="stock">STOCK: {stock}</p>
        </div>
    )
}

export default ItemCount