import { createContext, useState } from "react";


 export const ShoppingCartContext = createContext();

 export const ShoppingCartProvider = ({children}) => {
    const [cartCounter, setCartCounter] = useState(0);

    console.log(cartCounter)

    return (
        <ShoppingCartContext.Provider value={{
            cartCounter, 
            setCartCounter
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
 }

