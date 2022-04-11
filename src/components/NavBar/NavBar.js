import "./NavBar.css"
import imagen from "./img1.png"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { getCategories } from "../productos"

const NavBar = () => {
const [categories, setCategories] = useState([])

useEffect(()=>{
    getCategories().then(categories => {
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