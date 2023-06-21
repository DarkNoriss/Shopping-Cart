import { StoreItem } from '@/components/StoreItem';
import storeItems from '@/data/items.json';

const Products = () => {
  return (
    <div>
      <h3>Products</h3>
      <div className='grid flex-1 grid-cols-3 gap-4'>
        {storeItems.map((item) => (
          <div
            className='flex h-48 flex-col justify-end rounded-lg bg-gray-600 p-1'
            key={item.id}
          >
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
