import { createContext, useState } from "react";


 export const ShoppingCartContext = createContext();

 export const ShoppingCartProvider = ({children}) => {

    //Shopping Cart · Increment quantity 
    const [cartCounter, setCartCounter] = useState(0);

    //Product Detail · Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const closeProductDetail = () => setIsProductDetailOpen(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    
     // Checkout Side Menu · Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    //Produc Detail · Show product
    const [selectedProduct, setSelectedProduct] = useState({});

    //Shopping Cart · Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    //Shopping Cart · Order
    const [order, setOrder] = useState([]);

    return (
        <ShoppingCartContext.Provider value={{
            cartCounter, 
            setCartCounter,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            setIsProductDetailOpen,
            selectedProduct,
            setSelectedProduct,
            cartProducts, 
            setCartProducts,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            isCheckoutSideMenuOpen,
            order,
            setOrder
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
 }

