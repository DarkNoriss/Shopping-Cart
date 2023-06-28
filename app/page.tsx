import { FilteredItems } from '@/components/FilteredItems';
import { randomNumberGenerator } from '@/utils/randomNumberGenerator';
import Image from 'next/image';

const Home = () => {
  const recommended = randomNumberGenerator();

  return (
    <>
      <div className='flex w-3/4 gap-12'>
        <div className='flex h-72 w-64 items-center justify-center rounded-2xl border-2'>
          <Image
            src='/assets/ads/1.jpg'
            alt='cat_ad'
            height={288}
            width={256}
            className='min-h-full min-w-full rounded-2xl'
          />
        </div>
        <div className='flex-1'>
          <FilteredItems tag='Recommended' recommended={recommended} />
        </div>
      </div>
    </>
  );
};

export default Home;
