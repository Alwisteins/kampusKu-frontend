const FilterSkeleton = () => {
  const filterField = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="w-1/3 animate-pulse mx-auto h-5 bg-gray-200 rounded-xl mb-5" />
      <div className="grid md:grid-cols-5 grid-cols-1 animate-pulse items-center justify-center gap-5">
        {filterField.map((item) => (
          <div key={item} className="flex gap-x-3">
            <div className="aspect-square h-10 bg-gray-200 rounded-xl" />
            <div className="w-full h-10 bg-gray-200 rounded-xl" />
          </div>
        ))}
      </div>
    </>
  );
};

export default FilterSkeleton;
