import {useState, useEffect } from "react";
import "./ItemListContainer.css";
import { getProducts } from "../productos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props)=>{

        const [products, setProducts]= useState([]);
        const {categoryId} = useParams();
        console.log(categoryId)

        useEffect(() =>{
            getProducts(categoryId).then(prods => {
                setProducts(prods)
            })
        }, [categoryId]) 
        
    return(
        <div className="productos" onClick={(e)=>console.log(e)}>
            <h1 className="titulo">{props.title}</h1>
             <ItemList productos={products} />   
        </div>
        )
}

export default ItemListContainer