'use client';

import { useShoppingCart } from '@/context/ShoppingCartContext';
import React from 'react';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  tag: string;
  imgUrl: string;
};

export const StoreItem: React.FC<StoreItemProps> = ({
  id,
  name,
  price,
  tag,
  imgUrl,
}) => {
  const {
    getItemQuantity,
    decreaseCartQuantity,
    increaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <>
      <span className='text-sm'>{name}</span>
      <span className='text-sm'>${price}</span>
      <div className=''>
        {quantity === 0 ? (
          <button className='w-full' onClick={() => increaseCartQuantity(id)}>
            Add to cart
          </button>
        ) : (
          <div className='flex flex-col items-center justify-center gap-1'>
            <div className='flex gap-2'>
              <button
                className='w-6 rounded bg-blue-600'
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className='w-6 rounded bg-blue-600'
                onClick={() => increaseCartQuantity(id)}
              >
                +
              </button>
            </div>

            <button
              className='w-20 rounded bg-red-600'
              onClick={() => removeFromCart(id)}
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </>
  );
};
