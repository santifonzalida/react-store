import { XMarkIcon } from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
    const { totalPrice, totalProducts } = props;

    return (
        <div className="flex justify-between items-center m-3">
            <p className="flex items-center gap-2 text-sm font-light">
                <span>Fecha: 01.02.2023</span>
                <span>Number of products: {totalProducts} </span>
                <span>Total: {totalPrice}</span>
            </p>
        </div>
    );  
}

export { OrdersCard };