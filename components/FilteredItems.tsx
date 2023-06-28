import { StoreItem } from '@/components/StoreItem';
import { items } from '@/data/items';

type FilteredItemsProps = {
  tag: string;
  recommended?: number[];
};

export const FilteredItems: React.FC<FilteredItemsProps> = ({ tag, recommended }) => {
  let filtered: typeof items;

  switch (tag) {
    case 'Products':
      filtered = items;
      break;
    case 'Recommended':
      filtered = items.filter((item) =>
        recommended?.some((itemRec) => item.id === itemRec)
      );
      break;
    default:
      filtered = items.filter((item) => item.tag === tag);
      break;
  }

  return (
    <div className='w-full'>
      <h3 className='text-4xl'>{tag}</h3>
      <div className='mt-4 grid flex-1 grid-cols-3 gap-4'>
        {filtered.map((item, index) => (
          <StoreItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
