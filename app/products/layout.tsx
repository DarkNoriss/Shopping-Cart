const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex w-2/3'>
      <div className='mr-4 w-52 rounded-xl border-2'>
        <h3 className='bold m-4'>Filters</h3>
      </div>
      {children}
    </div>
  );
};

export default ProductLayout;
