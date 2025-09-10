import { Icon } from "@iconify/react/dist/iconify.js";
import { useSelector, useDispatch } from 'react-redux';
import { icons } from "../config/icons";
import cn from "../common/utils/cn"
import { toggleCart } from "../store/CartSlice";



export default function CartButton() {

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleCartClick = () => {
        dispatch(toggleCart());
    };


    const itemsCount = cartItems.items.length;

    return <button className={cn(
        "flex items-center justify-center relative",
        "gap-2 p-2",
        "rounded-full",
        "bg-gray-100",
        "hover:bg-gray-200 cursor-pointer",
    )}
        onClick={handleCartClick}
    >
        <Icon icon={icons.cart} className="text-2xl text-green-600 hover:text-green-800 cursor-pointer" />
        <span className="font-medium">Cart</span>
        <span
            className="p-2 rounded-full bg-gray-300 w-6 h-6 flex items-center justify-center text-sm font-semibold"
        >
            {itemsCount}
        </span>
        <span className="text-green-700">
            ${cartItems.totalCost}
        </span>
    </button>
}