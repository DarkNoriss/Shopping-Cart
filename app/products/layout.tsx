const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex w-2/3'>
      <div className='mr-4 h-96 w-52 rounded-xl border-2'>
        <h3 className='bold m-4'>Filters</h3>
        <div className='flex flex-col pl-4'>
          <span>placeholder 1</span>
          <span>placeholder 2</span>
          <span>placeholder 3</span>
          <span>placeholder 4</span>
          <span>placeholder 5</span>
          <span>placeholder 6</span>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ProductLayout;
