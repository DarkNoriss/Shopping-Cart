export const Header = () => {
  return (
    <header className='mt-1 flex w-full flex-col items-center justify-between font-bold'>
      <div className='flex w-full'>
        <h1 className='text-6xl'>.store</h1>
        <nav className='flex w-full items-center justify-end gap-8'>
          <div className='flex h-full w-24 items-center justify-center rounded-lg hover:border-2'>
            Home
          </div>
          <div className='flex h-full w-24 items-center justify-center rounded-lg hover:border-2'>
            Products
          </div>
          <div className='flex h-full w-24 items-center justify-center rounded-lg hover:border-2'>
            Cart
          </div>
        </nav>
      </div>

      <nav className='flex w-full justify-center gap-16 border-b-2 border-t-2'>
        <div className='flex h-12 w-24 items-center justify-center rounded-lg text-center hover:border-2'>
          PC
        </div>{' '}
        <div className='flex h-12 w-24 items-center justify-center rounded-lg text-center hover:border-2'>
          TV
        </div>{' '}
        <div className='flex h-12 w-24 items-center justify-center rounded-lg text-center hover:border-2'>
          Valo skins
        </div>{' '}
        <div className='flex h-12 w-24 items-center justify-center rounded-lg text-center hover:border-2'>
          Gay porn
        </div>
      </nav>
    </header>
  );
};
