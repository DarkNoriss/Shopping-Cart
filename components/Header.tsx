import Link from 'next/link';

export const Header = () => {
  return (
    <header className='mb-4 mt-1 flex w-full flex-col items-center justify-between font-bold'>
      <div className='flex w-full'>
        <h1 className='text-6xl'>.store</h1>
        <nav className='flex w-full items-center justify-end gap-8'>
          <Link
            href='/'
            className='flex h-full w-24 items-center justify-center rounded-lg hover:border-2'
          >
            Home
          </Link>
          <Link
            href='/products'
            className='flex h-full w-24 items-center justify-center rounded-lg hover:border-2'
          >
            Products
          </Link>
          <div className='relative flex h-full w-24 items-center justify-center rounded-lg hover:border-2'>
            <span>Cart</span>
            <div className='absolute bottom-2 right-2 flex aspect-square w-6 translate-x-1/4 translate-y-1/4 items-center justify-center rounded-full bg-red-600'>
              6
            </div>
          </div>
        </nav>
      </div>

      <nav className='flex w-full justify-center gap-16 border-b-2 border-t-2'>
        <Link
          href='/products/pc'
          className='flex h-12 w-24 items-center justify-center rounded-lg text-center hover:border-2'
        >
          PC
        </Link>
        <Link
          href='/products/tv'
          className='flex h-12 w-24 items-center justify-center rounded-lg text-center hover:border-2'
        >
          TV
        </Link>
        <Link
          href='/products/valo-skins'
          className='flex h-12 w-24 items-center justify-center rounded-lg text-center hover:border-2'
        >
          Valo skins
        </Link>
        <Link
          href='/products/gay-porn'
          className='flex h-12 w-24 items-center justify-center rounded-lg text-center hover:border-2'
        >
          Gay porn
        </Link>
      </nav>
    </header>
  );
};
