'use client';

import { useShoppingCart } from '@/context/ShoppingCartContext';
import React from 'react';
import { QuantityDisplay } from './QuantityDisplay';
import { formatCurrency } from '@/utils/formatCurrency';

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
  const { getItemQuantity, increaseCartQuantity, removeFromCart } =
    useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <>
      <span className='text-sm'>{name}</span>
      <span className='text-sm'>{formatCurrency(price)}</span>
      <div className=''>
        {quantity === 0 ? (
          <button className='w-full' onClick={() => increaseCartQuantity(id)}>
            Add to cart
          </button>
        ) : (
          <div className='flex flex-col items-center justify-center gap-1'>
            <QuantityDisplay id={id} quantity={quantity} />
            <button
              className='w-24 rounded bg-red-600'
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
