import "./NavBar.css"
import imagen from "./img1.png"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { firestoredb } from "../services/firebase"
import { getDocs, collection, doc} from "firebase/firestore";

const NavBar = () => {
const [categories, setCategories] = useState([])

useEffect(()=>{
    getDocs(collection(firestoredb, 'categories')).then(Response =>{
        const categories = Response.docs.map(doc =>{
            return{id: doc.id, ...doc.data()}
        })
        setCategories(categories)
    })
    
}, [])

    return ( 
            <nav >
               <Link to="/"> <img className="imgNavbar" src={imagen} alt="logo"></img></Link>
                {categories.map(cat => <Link className="btnNavBar" key={cat.id} to={`/category/${cat.id}`}>{cat.description}</Link>)}
                <Link className="btnNavBar" to="Todos-los-productos">Todos los productos</Link>
                <CartWidget/>
            </nav >
    )
}

export default NavBar