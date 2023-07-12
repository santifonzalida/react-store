import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context';
import { OrderCard } from '../OrderCard';
import { totalPrice } from '../../utils';
import './styles.css';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);

    const deleteProduct = (idProduct) => {
        let productList = [...context.cartProducts];
        let index = productList.findIndex(product => product.id == idProduct);
        if(index > -1) {
            productList.splice(index,1);
            context.setCartProducts(productList);
            context.setCartCounter(productList.length);
        }
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: new Date().toString(),
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([]);
    }

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl p-6'>Cart</h2>
                <div className='p-4'>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer' onClick={() => context.closeCheckoutSideMenu()}></XMarkIcon>
                </div>
            </div>
            <div className='px-5 overflow-y-scroll flex-1'>
                {context.cartProducts?.map(product => (
                    <OrderCard props={product} key={product.id} delete={deleteProduct}/>
                ))}
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button className='w-full bg-black py-3 text-white rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    );
}

export { CheckoutSideMenu };

