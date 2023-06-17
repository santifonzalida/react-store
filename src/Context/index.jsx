import { createContext, useState, useEffect } from "react";


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

    //Get products
    const [products, setProducts] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState(null);

    //Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null);

    useEffect(() => {
      fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')
        .then(response => response.json()
        .then(data => setProducts(data)));
    },[])

    const filteredProductsByTitle = (products, searchByTitle) => {
        return products?.filter((product) => product.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    }

    useEffect(() => {
        if(searchByTitle) setFilteredProducts(filteredProductsByTitle(products, searchByTitle))
      },[products, searchByTitle])
  
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
            setOrder,
            products, 
            setProducts,
            searchByTitle, 
            setSearchByTitle,
            filteredProducts,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
 }

