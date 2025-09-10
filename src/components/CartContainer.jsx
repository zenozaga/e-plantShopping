import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import cn from "../common/utils/cn";

import { Icon } from "@iconify/react/dist/iconify.js";
import { icons } from "../config/icons";
import CartItem from "./CartItem";
import { toggleCart, updateQuantity, removeItem } from "../store/CartSlice";
import { useMemo } from "react";



export default function CartContainer() {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleToggleCart = () => {
        dispatch(toggleCart());
    }

    const handleContinueShopping = () => {
        dispatch(toggleCart());
    }

    const totalCost = useMemo(() => {
        return cart.items.reduce((total, item) => total + item.totalCost, 0)
    }, [cart.items]);


    return <div
        className={cn(
            "fixed top-0 left-0 w-full h-full bg-black/30 z-50 ",
            cart.isOpen ? "visible opacity-100" : "invisible opacity-0",
            "transition-all duration-300 ease-in-out",
        )}
    >

        <div
            className={cn(
                "cart-container w-90 h-full absolute top-0 right-0 bg-white",
                "transition-transform duration-300 ease-in-out",
                "flex flex-col",
                cart.isOpen ? "translate-x-0" : "translate-x-full",
            )}
        >

            <div className="w-full h-full flex flex-col justify-between">

                <div className="w-full flex items-center gap-4 justify-between p-2 border-b border-gray-300">
                    <button className={cn(
                        "flex items-center justify-center",
                        "gap-2 p-2 px-4 rounded-full",
                        "bg-gray-100 cursor-pointer",
                        "hover:bg-gray-200 transition duration-300 ease-in-out",
                    )}
                    onClick={handleToggleCart}
                    >
                        <Icon icon={icons.close} className="text-2xl text-gray-600" />
                        <span className="text-lg font-medium">
                            Cart
                        </span>
                    </button>
                    <button
                        className="flex gap-2"
                        onClick={handleToggleCart}                >
                        <Icon icon={icons.cart} className="text-2xl" />
                        <span className="text-lg font-medium">
                            ({cart.items.length})
                        </span>
                    </button>
                </div>

                <div className="flex-1 flex flex-col p-4 gap-6 overflow-y-auto">
                    {cart.items.map(item => <CartItem key={item.id} {...item}
                        onDecrement={() => {
                            dispatch(updateQuantity({
                                id: item.id,
                                quantity: item.quantity - 1
                            }))
                        }}
                        onIncrement={() => {
                            dispatch(updateQuantity({
                                id: item.id,
                                quantity: item.quantity + 1
                            }))
                        }}
                        onRemove={() => dispatch(removeItem(item))}
                    />)}
                    {
                        cart.items.length === 0 && <div className="w-full flex flex-col justify-center items-center gap-4 mt-20">
                            <Icon icon={icons.cartNot} className="text-6xl text-gray-400" />
                            <span className="text-gray-600 text-lg font-medium">Your cart is empty</span>
                        </div>
                    }
                </div>

                <div
                    className="w-full p-4 flex flex-col gap-4"
                >
                    <div>
                        <span className="text-lg font-semibold">Total:</span>
                        <span className="text-xl font-bold ml-2">${totalCost}</span>
                    </div>

                    <button className={cn(
                        "w-full p-4 rounded-xl",
                        "bg-gray-300 text-dark font-semibold",
                        "cursor-pointer hover:bg-gray-400 transition duration-300 ease-in-out"
                    )}
                        onClick={handleContinueShopping}
                    >
                        Continue Shopping
                    </button>

                    <button className={cn(
                        "w-full p-4 rounded-xl cursor-pointer",
                        "bg-green-600 text-white font-semibold",
                        "hover:bg-green-700 transition duration-300 ease-in-out",
                        cart.items.length === 0 ? "bg-gray-400 cursor-not-allowed hover:bg-gray-400" : ""
                    )}
                        disabled={cart.items.length === 0}
                        onClick={() => alert("Coming Soon")}
                    >
                        Checkout ${totalCost}
                    </button>

                </div>

            </div>
        </div>
    </div>
}