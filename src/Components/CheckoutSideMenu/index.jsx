import { useContext } from 'react';
import { XMarkIcon, ShoppingCartIcon, TrashIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context';
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
            <div className="flex justify-between items-center">
                <div className="w-full">
                    <div className="shadow-xl w-full">
                        <div className="p-2 flex bg-white hover:bg-gray-100 border-b border-gray-100">
                            <div className="p-2 w-12">
                                <img src="https://dummyimage.com/50x50/bababa/0011ff&amp;text=50x50" alt="img product" />
                            </div>
                            <div className="flex-auto text-sm w-32">
                                <div className="font-bold">Product 1</div>
                                <div className="truncate">Product 1 description</div>
                                <div className="text-gray-400">Qt: 2</div>
                            </div>
                            <div className="flex flex-col w-18 font-medium items-end">
                                <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                                    <TrashIcon className='h-full w-full'/>
                                </div>
                                $12.22
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export { CheckoutSideMenu };

