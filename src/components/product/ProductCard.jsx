import { Heart, Eye, ShoppingBag } from "lucide-react";
import RatingStars from "./RatingStars";

export default function ProductCard({ product }) {
  return (
    <div className="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 transition-all hover:shadow-md hover:border-[#00B712] hover:-translate-y-0.5">
      {product.salePercent && (
        <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-medium px-2.5 py-1 rounded-md">
          Sale {product.salePercent}%
        </span>
      )}

      <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          type="button"
          className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-[#00B712] hover:border-[#00B712] transition-colors"
          aria-label="Add to favorites"
        >
          <Heart className="w-4 h-4" />
        </button>
        <button
          type="button"
          className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-[#00B712] hover:border-[#00B712] transition-colors"
          aria-label="Quick view"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      <div className="bg-white flex items-center justify-center aspect-square mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div className="relative">
        <p className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-[#00B712] transition-colors">
          {product.name}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <span className="font-semibold text-gray-900 dark:text-gray-100">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-gray-400 text-sm line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        <RatingStars rating={product.rating} size="w-3.5 h-3.5" />

        <button
          type="button"
          className="absolute right-0 bottom-0 w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 flex items-center justify-center group-hover:bg-[#00B712] group-hover:text-white transition-colors"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
