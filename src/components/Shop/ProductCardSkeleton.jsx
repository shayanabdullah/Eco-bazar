
const ProductCardSkeleton = () => {
  return (
    <div
      role="status"
      aria-label="Loading product"
      className="relative h-full flex flex-col gap-y-3 bg-white border border-gray-2 rounded-2xl p-4 animate-pulse"
    >
      {/* image area, with badge + action placeholders on top */}
      <div className="relative w-full aspect-square rounded-xl  bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100">
        {/* sale badge, top-left */}
        <div className="absolute top-3 left-3 w-12 h-5 rounded-md bg-gray-200" />

        {/* wishlist + quick view, top-right */}
        <div className="absolute top-3 right-3 flex flex-col items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white/80" />
          <div className="w-8 h-8 rounded-full bg-white/80" />
        </div>

        {/* add to cart, floating bottom-right, overlapping the card body */}
        <div className="absolute -bottom-14 right-3 w-10 h-10 rounded-full bg-gray-200 border-4 border-white shadow-sm" />
      </div>

      {/* product name — two lines */}
      <div className="flex flex-col gap-y-2 mt-2">
        <div className="h-4 w-3/5 rounded-full bg-gray-200" />
        <div className="h-4 w-2/5 rounded-full bg-gray-100" />
      </div>

      {/* price */}
      <div className="flex items-center gap-x-2">
        <div className="h-5 w-14 rounded-full bg-gray-200" />
        <div className="h-4 w-10 rounded-full bg-gray-100" />
      </div>

      {/* rating + review count */}
      <div className="flex items-center gap-x-1 mt-auto">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="w-3 h-3 rounded-full bg-gray-100" />
        ))}
        <div className="h-3 w-8 rounded-full bg-gray-100 ml-1" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
