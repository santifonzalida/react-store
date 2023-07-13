import { useContext, useState } from "react";
import { CheckIcon, PlusIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from "../../Context";

const Card = (data) => {
    const context = useContext(ShoppingCartContext);

    const [isLoaded, setIsLoaded] = useState(false);

    const addToCart = (product) => {
        context.setCartCounter(context.cartCounter +1)
        context.setCartProducts([...context.cartProducts, product]);
        context.closeProductDetail();
        context.openCheckoutSideMenu();
    }
    
    const openProductDetail = (product) => {
        context.setSelectedProduct(product);
        context.closeCheckoutSideMenu();
        context.setIsProductDetailOpen(true);
    }

    const handleImageLoad = () => {
        setIsLoaded(true);
    }

    const renderIcon = (idProduct) => {
        const isInCart = context.cartProducts.filter((product) => product.id === idProduct).length > 0;

        if(isInCart){
            return (
                <div className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1" >
                    <CheckIcon className="h-6 w-6 text-white"></CheckIcon>
                </div>
            );
        }else {
            return (
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1" >
                    <PlusIcon className="h-6 w-6" onClick={() => addToCart(data.data)}></PlusIcon>
                </div>
            );
        }
    }

    return ( 
        <div className="bg-white cursor-pointer w-44 md:w-56 h-45 md:h-60 ml-2 mb-2 md:mb-0 rounded-lg">
            {isLoaded ? (
                <figure className="relative mb-2 w-full h-4/5">
                    <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data.category.name}</span>
                    <img 
                        className="w-full h-full object-cover rounded-lg" 
                        src={data.data.images[0]} 
                        alt={data.data.description}
                        onClick={() => openProductDetail(data.data)} 
                    />
                    {renderIcon(data.data.id)}
                </figure>
            ) : (
                <div className="animate-pulse flex">
                    <div className="flex-1 space-y-1">
                        <div className="rounded-lg bg-slate-200"></div>
                        <div className="h-44 bg-slate-500 rounded-lg"></div>
                    </div>
                </div>
            )}
            <p className="flex justify-between">
                <span className="text-sm font-light truncate pt-1" onClick={() => openProductDetail(data.data)}>{data.data.title}</span>
                <span className="text-lg font-medium">${data.data.price}</span>
            </p>
            <img
                src={data.data.images[0]}
                alt="hidden image"
                style={{display: 'none'}}
                onLoad={handleImageLoad}
            />
        </div>
    );
}

export { Card }

