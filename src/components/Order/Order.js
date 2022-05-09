import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import {addDoc,collection, documentId, getDocs, query, where, writeBatch} from "firebase/firestore"
import { firestoredb } from "../services/firebase";
import { useState } from "react";
import "../Order/Order.css"


const Orden = ()=>{
    const {buyer, clear} = useContext(cartContext)
    const [id, setId]= useState()
    const [ident, setIdent]= useState('true')
    
const createOrder = ()=>{
 const batch = writeBatch(firestoredb)

 const ids = buyer.items.map(prod => prod.id)
 const collectionRef = collection(firestoredb, 'products')
 const outOfStock = []
 

 getDocs(query(collectionRef), where(documentId(), 'in', ids)) .then(Response =>{
     Response.docs.forEach(doc =>{
        const dataDoc = doc.data()
        const prodQuantity = buyer.items.find(prod => prod.id === doc.id)?.count
        if(dataDoc.stock >= prodQuantity){
            batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity})
        } else{
        const outOfStock = []
           outOfStock.push({id: doc.id, dataDoc})
        }
     })
 }).then(() =>{
     if(outOfStock.length === 0){
        const collectionRef= collection(firestoredb, 'orders')
        addDoc(collectionRef, buyer).then(docRef => {
            const idCompra= docRef.id
            setId(idCompra)
            clear()
            setIdent(!ident)
            batch.commit()
        })
     } else{
         return Promise.reject({name: 'outOfStockError', products: outOfStock})
     }
    }).catch(error =>{
        console.log(error) 
    })
}
    return(
        <div>
            <h1>Orden de Compra</h1>    
            <div className="buyer">
                <p>Nombre:  {buyer.Name}</p>
                <p>Telefono: {buyer.Phone}</p>   
                <p>Email:    {buyer.Email}</p>    
                <p>Total de la compra :  {buyer.Total}</p>    
                <p> Id de compra:    {id}</p>
            </div>    
            {ident ? <button onClick={()=> createOrder()}>Generar Orden</button>: null}
        </div>
        
    )
}

export default Orden