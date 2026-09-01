import { useState } from "react";
// import { Heart, Facebook, Twitter, Instagram } from "lucide-react";
import RatingStars from "./RatingStars";
import QuantitySelector from "./QuantitySelector";
import AddToCartButton from "./AddToCartButton";
import ProductMeta from "./ProductMeta";

export default function ProductInfo({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(product.defaultQuantity ?? 1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [ toastVisible, setToastVisible] = useState(false);

  const handleAddToCart = () => {
    onAddToCart?.(quantity);
    setToastVisible(true);
    window.clearTimeout(handleAddToCart._t);
    handleAddToCart._t = window.setTimeout(() => setToastVisible(false), 2200);
  };

  return (
    <div className="relative flex flex-col gap-5">
      {/* Title + stock badge */}
      <div>
        <div className="flex items-center flex-wrap gap-3">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {product.name}
          </h1>
          {product.inStock && (
            <span className="text-xs font-medium bg-[#00B712]/10 text-[#00B712] px-2.5 py-1 rounded-full">
              In Stock
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
          <RatingStars rating={product.rating} />
          <span>{product.reviewCount} Review</span>
          <span className="text-gray-300">•</span>
          <span>SKU: {product.sku}</span>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3 pb-5 border-b border-gray-200">
        <span className="text-gray-400 line-through text-lg">
          ${product.originalPrice.toFixed(2)}
        </span>
        <span className="text-2xl md:text-3xl font-bold text-[#00B712]">
          ${product.price.toFixed(2)}
        </span>
        <span className="text-xs font-medium bg-red-50 text-red-500 px-2.5 py-1 rounded-full">
          {product.discountPercent}% Off
        </span>
      </div>

      {/* Brand + share */}
      <div className="flex items-center justify-between flex-wrap gap-4 pb-5 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Brand:</span>
          <img src={product.brand.logo} alt={product.brand.name} className="h-7" />
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">Share item:</span>
          {/* <div className="flex items-center gap-2">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#00B712] text-white hover:opacity-90 transition-opacity"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-4 h-4 fill-current" />
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:text-gray-800 transition-colors"
              aria-label="Share on Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
              aria-label="Share on Pinterest"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.03-.655 2.568-.994 3.995-.283 1.195.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.137.893 2.738a.36.36 0 01.083.345c-.09.375-.293 1.199-.334 1.363-.052.222-.174.269-.401.162-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.749-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
              </svg>
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
              aria-label="Share on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div> */}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed text-gray-500">
        {product.description}
      </p>

      {/* Quantity + Add to Cart + Favorite */}
      <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
        <QuantitySelector quantity={quantity} onChange={setQuantity} />
        <AddToCartButton onClick={handleAddToCart} />
        <button
          type="button"
          onClick={() => setIsFavorite((v) => !v)}
          className={`w-12 h-12 shrink-0 flex items-center justify-center rounded-full border transition-colors ${
            isFavorite
              ? "bg-[#00B712]/10 border-[#00B712] text-[#00B712]"
              : "border-gray-200 text-gray-400 hover:text-gray-700"
          }`}
          aria-pressed={isFavorite}
          aria-label="Toggle favorite"
        >
          {/* <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} /> */}
        </button>
      </div>

      {/* Metadata */}
      <ProductMeta category={product.category} tags={product.tags} />

      {/* Add to cart toast */}
      {toastVisible && (
        <div className="absolute -bottom-3 translate-y-full left-0 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg shadow-lg animate-in fade-in">
          Added {quantity} × {product.name} to cart
        </div>
      )}
    </div>
  );
}
