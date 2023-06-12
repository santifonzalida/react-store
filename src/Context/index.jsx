import { createContext, useState } from "react";


 export const ShoppingCartContext = createContext();

 export const ShoppingCartProvider = ({children}) => {
    const [cartCounter, setCartCounter] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const [selectedProduct, setSelectedProduc] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const openProductDetail = (product) => {
        setSelectedProduc(product);
        setIsProductDetailOpen(true);
        console.log(selectedProduct)
    }
    const closeProductDetail = () => setIsProductDetailOpen(false);

    return (
        <ShoppingCartContext.Provider value={{
            cartCounter, 
            setCartCounter,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            selectedProduct,
            isLoading, 
            setIsLoading,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
 }

