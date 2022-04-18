import { useState, createContext} from "react";
import Swal from "sweetalert2"

export const cartContext = createContext()

export const CartContextProvider = ({children})=>{
    const [cart, setCart] = useState([])
    const [contador,setcontador]=useState(0)
    let count =0

    const AddItem =(productToAdd)=>{
        const cart1 = cart.concat(productToAdd)

        if (cart.some(prod => prod.id === productToAdd.id)) {
            cart1.pop()
            Swal.fire({
                title: "Error",
                text:`Producto ya fue agregado al carrito`, 
                icon: "error",
                timer: "1500",})
        }
            else{
                setCart(cart1)
                cart1.forEach(prod => {count += prod.count})
                setcontador(count)
                Swal.fire({
                    title: "Saved",
                    text:`Se agregaron al carrito : ${productToAdd.count} unidades`, 
                    icon: "success",
                    timer: "1500",})
                } 
    }

    return(
        <cartContext.Provider value={{AddItem, contador}}>
            {children}
        </cartContext.Provider>
    )

}
