const CardSkeleton = () => {
  return (
    <div className="flex md:flex-row flex-col gap-3 mb-10">
      <div className="md:aspect-square aspect-video animate-pulse md:h-36 rounded-xl bg-gray-200"></div>
      <div className="grid gap-3 w-full content-stretch">
        <div className="w-full animate-pulse h-12 rounded-xl bg-gray-200"></div>
        <div className="w-full animate-pulse h-4 rounded-xl bg-gray-200"></div>
        <div className="w-full animate-pulse h-6 rounded-xl bg-gray-200"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
