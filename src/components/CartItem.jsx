import React from 'react';
import cn from '../common/utils/cn';
import { Icon } from '@iconify/react/dist/iconify.js';


const CartItem = ({
  id,
  name,
  image,
  cost,
  quantity,
  totalCost,
  onIncrement,
  onDecrement,
  onRemove,
}) => {

  return (
    <div className="w-full cart-item flex items-center gap-4" key={name}>
      <img className="cart-item-image w-20 h-20 rounded-xl" src={image} alt={name} />
      <div className="cart-item-details flex-1 flex flex-col gap-1">
        <div className='flex items-center justify-between gap-2 font-semibold'>
          <div className="cart-item-name ">{name}</div>
          <div className="cart-item-cost text-gray-600">Price: {cost}</div>
        </div>

        <div className='flex items-center justify-between'>
          <div className="cart-item-total font-semibold text-xl">${totalCost}</div>

          <div className={cn(
            "cart-item-quantity flex items-center gap-2  rounded-full overflow-hidden ",
            "bg-gray-200"
          )}>
            <OperationButton
              isDisabled={quantity <= 1}
              className={"hover:text-red-700 hover:bg-red-300"}
              onClick={() => onDecrement()}>
              <Icon icon={"mdi-minus"} className="text-lg" />
            </OperationButton>
            <span className="cart-item-quantity-value flex-1 text-center">{quantity}</span>
            <OperationButton
              className={" hover:text-green-700 hover:bg-green-300"}
              onClick={() => onIncrement()}>
              <Icon icon={"mdi-plus"} className="text-lg" />
            </OperationButton>
          </div>
        </div>

        <div>
          <button className={cn(
            "cart-item-delete",
            "text-red-600 hover:underline text-sm font-medium",
            "cursor-pointer"
          )} onClick={() => onRemove()}>Delete</button>
        </div>
      </div>
    </div>
  );
};


const OperationButton = ({ isDisabled, onClick, children, className }) => {
  return (
    <button
      disabled={isDisabled}
      className={cn(
        "operation-button w-8 h-8 flex items-center justify-center cursor-pointer",
        " rounded-lg hover:bg-gray-300 transition duration-300 ease-in-out",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default CartItem;


