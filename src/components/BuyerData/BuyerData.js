
import "../BuyerData/BuyerData.css"
import { cartContext } from "../context/cartContext"
import {useContext,useState} from "react"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {Timestamp} from "firebase/firestore"


const BuyerData = () =>{
    const {cart, cargabuyer} = useContext(cartContext)
    const {total} = useParams();
    const [nombre,setNombre]=useState("");
    const [phone,setPhone]=useState(0);
    const [email,setEmail]=useState("");


        const guardardatos=(e,i)=>{
            if(i === 1) setNombre(e.target.value)
            if(i ===2 ) setPhone(e.target.value)
            if(i === 3) setEmail(e.target.value)
            
        }
        

    return(
        <div>
            <h1>Datos del comprador</h1>
        <form className="form" >
            <label>
                Nombre:
                <input required  type="text" name="name" onChange={(e)=>{guardardatos(e,1)}}/>
            </label>
            <label>
                Telefono:
                <input  required type="number" name="phone" onChange={(e)=>{guardardatos(e,2)}}/>
            </label>
            <label>
                Email:
                <input  required  type="email" name="email" onChange={(e)=>{guardardatos(e,3)}}/>
            </label>
        </form>
        <Link 
            to="/orden" 
            className="css-button-sliding-to-top--green"
            onClick={()=>{cargabuyer ({
            Name:nombre,
            Phone:phone,
            Email:email,
            Total:total,
            items: cart,
            date: Timestamp.fromDate(new Date())
        })}}> Guardar</Link>
        </div>
    )
}

export default BuyerData