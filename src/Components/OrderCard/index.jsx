import { XMarkIcon } from "@heroicons/react/24/solid";

const OrderCard = (props) => {
    const {title, price, images} = props.props;
    console.log(props);
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 pb-2 pl-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={images[0]} alt={title} />
                </figure>
                <p className="text-sm font-light ">{title}</p>
            </div>
            <div className="flex items-center gap-2 pr-2">
                <p className="text-lg font-medium">${price}</p>
                <XMarkIcon className="h-6 w-6 text-black cursor-pointer"></XMarkIcon>
            </div>
        </div>
    );  
}

export { OrderCard };