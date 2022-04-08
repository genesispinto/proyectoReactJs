import { Component } from "react"
import "./NavBar.css"
import imagen from "./img1.png"
import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return ( 
            <nav >
                <img className="imgNavbar" src={imagen} alt="logo"></img>
                <ul>
                    <li>
                        <a href="#">Productos para gatos</a>
                    </li>
                    <li>
                        <a href="#">Productos para perros</a>
                    </li>
                    <li>
                        <a href="#">Sale</a>
                    </li>
                </ul>
                <CartWidget/>
            </nav >
    )
}
export default NavBar