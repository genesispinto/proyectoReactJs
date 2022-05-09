import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { firestoredb } from "../services/firebase";
import { getDoc, doc} from "firebase/firestore";

const ItemDetailContainer = () =>{
    const {productId} = useParams();

    const [productsById, setProductsById]= useState({});
    
    useEffect (()=>{
        getDoc(doc(firestoredb, 'products', productId)).then(Response =>{
            const product ={id: Response.id , ...Response.data()}
            setProductsById(product)
        })
    }, [productId])

    return( 
        <div>
            <ItemDetail {...productsById} />
        </div>
       

    )
}
export default ItemDetailContainer