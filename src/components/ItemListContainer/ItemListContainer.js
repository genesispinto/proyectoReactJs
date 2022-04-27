import {useState, useEffect} from "react";
import "./ItemListContainer.css";
// import { getProducts } from "../productos";
import { getDocs, collection, query, where } from "firebase/firestore";
import { firestoredb } from "../services/firebase";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props)=>{
        const [products, setProducts]= useState([]);
        const {categoryId} = useParams();

        useEffect(() =>{

            const collectionRef = categoryId 
            ? query(collection(firestoredb, 'products'), where('categoryId',"==", categoryId))
            : collection(firestoredb, 'products')

            getDocs(collectionRef).then(Response => {
               const products = Response.docs.map(doc =>{
                return{id: doc.id, ...doc.data()}
                 
            })
            setProducts(products)
            console.log(products)
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