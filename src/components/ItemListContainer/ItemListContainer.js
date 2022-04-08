import {useState, useEffect } from "react";
import "./ItemListContainer.css";
import { getProducts } from "../productos";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props)=>{

        const [products, setProducts]= useState([]);

        useEffect(() =>{
            getProducts().then(prods => {
                setProducts(prods)
            })
        }, []) 
        
    return(
        <div className="productos">
            <h1 className="titulo">{props.title}</h1>
             <ItemList productos={products} />   
        </div>
        )
}

export default ItemListContainer