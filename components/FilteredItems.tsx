import { StoreItem } from '@/components/StoreItem';
import { items } from '@/data/items';

export const FilteredItems = ({ tag }: { tag: string }) => {
  // if tag is "products" dont filter, show all products
  const filtered =
    tag !== 'Products' ? items.filter((item) => item.tag === tag) : items;

  return (
    <div className='w-full'>
      <h3 className='text-xl'>{tag}</h3>
      <div className='mt-4 grid flex-1 grid-cols-3 gap-4'>
        {filtered.map((item) => (
          <div
            className='flex h-64 flex-col justify-end rounded-lg bg-gray-600 p-1'
            key={item.id}
          >
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};
