import { Component } from "react"
import "./NavBar.css"
import imagen from "./img1.png"
const NavBar = () => {
    return ( 
            <nav >
                <img src={imagen} alt="logo"></img>
                <ul>
                    <li>
                        <a href="#">Productos</a>
                    </li>
                    <li>
                        <a href="#">Sale</a>
                    </li>
                </ul>

            </nav >
    )
}
export default NavBar