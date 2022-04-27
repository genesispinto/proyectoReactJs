// import {getProductsById } from "../productos";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { firestoredb } from "../services/firebase";
import { getDoc, doc} from "firebase/firestore";

const ItemDetailContainer = () =>{
    const {productId} = useParams();

    const [productsById, setProductsById]= useState({});
    
    useEffect (()=>{
        // getProductsById(productId).then(prods => {
        //     setProductsById(prods)
        //     console.log(prods)
        // })
        getDoc(doc(firestoredb, 'products', productId)).then(Response =>{
            console.log(Response)
            const product ={id: Response.id , ...Response.data()}
            setProductsById(product)
        })
    }, [])

    return( 
        <div>
            <ItemDetail {...productsById} />
        </div>
       

    )
}
export default ItemDetailContainer