'use client';

import { QuantityDisplay } from '@/components/QuantityDisplay';
import { useShoppingCart } from '@/context/ShoppingCartContext';
import { items } from '@/data/items';
import { formatCurrency } from '@/utils/formatCurrency';

const Cart = () => {
  const { getQuantity, getCart, decreaseCartQuantity, increaseCartQuantity } =
    useShoppingCart();
  const quantity = getQuantity();
  const cart = getCart();

  return (
    <div className='flex flex-col gap-4'>
      {quantity === 0 && <h3 className='mt-16 text-6xl'>Your shopping cart is empty!</h3>}

      {quantity > 0 && (
        <>
          <div className='flex gap-8 text-center text-xl font-bold'>
            <span className='flex-1'>Name</span>
            <span className='w-20'>Quantity</span>
            <span className='w-24'>Price</span>
          </div>
          {cart.map((itemCart) =>
            items
              .filter((item) => itemCart.id === item.id)
              .map((item) => (
                <div key={item.id} className='flex gap-8'>
                  <span className='flex-1'>{item.name}</span>
                  <QuantityDisplay id={item.id} quantity={itemCart.quantity} />
                  <span className='w-20 text-right'>{formatCurrency(item.price)}</span>
                </div>
              ))
          )}
          <div className='text-right text-xl font-bold'>
            <p>Total</p>
            <p>
              {formatCurrency(
                cart.reduce((total, cartItem) => {
                  const item = items.find((item) => item.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
