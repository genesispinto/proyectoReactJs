import { useState, createContext} from "react";
import Swal from "sweetalert2"

export const cartContext = createContext()

export const CartContextProvider = ({children})=>{
    const [cart, setCart] = useState([])
    const [contador,setcontador]=useState(0)
    let count =0

    const AddItem =(productToAdd)=>{

        if (isInCart(productToAdd)) 
        {
            cart.forEach(e => { 
                    if(e.id===productToAdd.id){
                    e.count = e.count + productToAdd.count}
            })     
            cart.forEach(prod => {count += prod.count})
            setcontador(count)
        }
            else{
                const cart1 = cart.concat(productToAdd)
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

    const isInCart = (productToAdd) =>{
        return(cart.some(prod => prod.id === productToAdd.id))
    }
    const clear = () =>{
        console.log('entre a clear')
        const clearCart = []
            setCart(clearCart)
            setcontador(0)
    }
    const removeItem = (id) =>{
        let count1 = 0
        const newCart= cart.filter(prod => prod.id !== id)
        setCart(newCart)
        newCart.forEach(prod => {count1 += prod.count})
        setcontador(count1)
    }

    return(
        <cartContext.Provider value={{AddItem, contador, clear, removeItem, cart}}>
            {children}
        </cartContext.Provider>
    )

}
