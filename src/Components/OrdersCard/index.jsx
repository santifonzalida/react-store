import { ChevronRightIcon } from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
    const { totalPrice, totalProducts } = props;

    return (
        <div className="flex justify-between items-center mb-3 border border-black p-4 w-80 rounded-lg ">
            <div className="flex justify-between items-center w-full">
                <p className="flex flex-col">
                    <span className="font-ligth">01.02.2023</span>
                    <span className="font-ligth">{totalProducts} articles</span>
                </p>
                <p className="flex items-center gap-2">
                    <span className="font-medium text-2xl">Total: ${totalPrice}</span>
                    <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
                </p>    
            </div>
        </div>
    );  
}

export { OrdersCard };