import { useShoppingCart } from '@/context/ShoppingCartContext';

type QuantityDisplayType = { id: number; quantity: number };

export const QuantityDisplay: React.FC<QuantityDisplayType> = ({
  id,
  quantity,
}) => {
  const { decreaseCartQuantity, increaseCartQuantity } = useShoppingCart();

  return (
    <div className='flex w-20 justify-between'>
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
  );
};
