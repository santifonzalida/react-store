import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context';
import { OrderCard } from '../OrderCard';
import './styles.css';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);
    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl p-6'>Cart</h2>
                <div className='p-4'>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer' onClick={() => context.closeCheckoutSideMenu()}></XMarkIcon>
                </div>
            </div>
            <div className='px-6'>
                {context.cartProducts?.map(product => (
                    <OrderCard props={product} key={product.id} />
                ))}
            </div>
            
        </aside>
    );
}

export { CheckoutSideMenu };

