'use client';

import { useShoppingCart } from '@/context/ShoppingCartContext';
import { items } from '@/data/items';

const Cart = () => {
  const { getQuantity, getCart } = useShoppingCart();
  const quantity = getQuantity();
  const cart = getCart();

  return (
    <div>
      {quantity === 0 ? (
        <h3 className='mt-16 text-6xl'>Your shopping cart is empty!</h3>
      ) : (
        cart.map((itemCart) =>
          items
            .filter((item) => itemCart.id === item.id)
            .map((item) => (
              <div key={item.id} className='flex gap-4'>
                <div>{item.name}</div>
                <div>{itemCart.quantity}</div>
                <div>{item.price * itemCart.quantity}$</div>
              </div>
            ))
        )
      )}
    </div>
  );
};

export default Cart;
