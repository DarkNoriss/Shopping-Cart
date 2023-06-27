'use client';

import { ReactNode, createContext, useContext, useState } from 'react';

type ShoppingCartContextType = {
  getItemQuantity: (id: number) => number;
  getQuantity: () => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  getCart: () => CartItem[];
};

const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

type ShoppingCartProviderType = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

export const ShoppingCartProvider: React.FC<ShoppingCartProviderType> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const getQuantity = () => {
    return cartItems.reduce((total, { quantity }) => total + quantity, 0);
  };

  const increaseCartQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  const getCart = () => {
    return cartItems;
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        getQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        getCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
