import {useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import getProducts from "../productos";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props)=>{

        const [products, setProducts]= useState([]);

        useEffect(() =>{
            getProducts().then(prods => {
                setProducts(prods)
            })
        }, []) 
        

         const handlerOnAdd = (quantity) =>{
         console.log(`Se agregaron al carrito : ${quantity} unidades`)
        }
    
    return(
        <div className="productos">
            <h1 className="titulo">{props.title}</h1>
             <ItemList productos = {products}/>

             {/* <ItemCount stock1= {10} initial = {0} onAdd= {handlerOnAdd}/>  */}
                
        </div>
        )
}

export default ItemListContainer