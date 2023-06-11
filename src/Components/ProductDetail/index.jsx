import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css';

const ProductDetail = () => {
    return (
        <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white">
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl p-6'>Detail</h2>
                <div className='p-4'>
                    <XMarkIcon className='h-6 w-6 text-black'></XMarkIcon>
                </div>
            </div>
        </aside>
    );
}

export { ProductDetail };

