import {getProductsById } from "../productos";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{
    const {productId} = useParams();

    const [productsById, setProductsById]= useState({});
    
    useEffect (()=>{
        getProductsById(productId).then(prods => {
            setProductsById(prods)
            console.log(prods)
        })

    }, [])

    return( 
        <div>
            <ItemDetail {...productsById} />
        </div>
       

    )
}
export default ItemDetailContainer