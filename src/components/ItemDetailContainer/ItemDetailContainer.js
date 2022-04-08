import {getProductsById } from "../productos";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () =>{

    const [productsById, setProductsById]= useState({});
    
    useEffect (()=>{
        getProductsById(3).then(prods => {
            setProductsById(prods)
            console.log(prods)
        })

    }, [])

    return( 
        <ItemDetail producto ={productsById} />

    )
}
export default ItemDetailContainer