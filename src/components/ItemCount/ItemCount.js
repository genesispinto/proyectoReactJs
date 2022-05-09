import { useState } from "react";
import "./ItemCount.css";

const ItemCount = (props) =>{

    const [count, setCount]= useState(props.initial)

    const Decrement = ()=>{
        if(count >0) {
            setCount(count - 1)
        }

    }
    const Increment = ()=>{
            setCount(count + 1)
    }
    const handleOnAdd = () =>{
        if(count>0) props.onAdd(count)
    }
    return(
        <div className="controlesProductos">
            <button onClick={Decrement}>-</button>
            <p>{count}</p>
            <button onClick={Increment}>+</button>
            <button className="agregaCarrito" onClick={handleOnAdd}>Agregar a Carrito</button>
        </div>
    )
}

export default ItemCount