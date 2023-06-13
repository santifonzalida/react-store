import { createContext, useState } from "react";


 export const ShoppingCartContext = createContext();

 export const ShoppingCartProvider = ({children}) => {
    const [cartCounter, setCartCounter] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const [selectedProduct, setSelectedProduc] = useState({});
    const [cartProducts, setCartProducts] = useState([]);
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);

    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    const openProductDetail = (product) => {
        setSelectedProduc(product);
        closeCheckoutSideMenu();
        setIsProductDetailOpen(true);
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
            cartProducts, 
            setCartProducts,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            isCheckoutSideMenuOpen
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
 }

