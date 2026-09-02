import { useState } from "react";
import RatingStars from "./RatingStars";
import QuantitySelector from "./QuantitySelector";
import ProductMeta from "./ProductMeta";
import { IoIosHeart, IoMdHeartEmpty } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
export default function ProductInfo({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(product.defaultQuantity ?? 1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const handleAddToCart = () => {
    onAddToCart?.(quantity);
    setToastVisible(true);
    window.clearTimeout(handleAddToCart._t);
    handleAddToCart._t = window.setTimeout(() => setToastVisible(false), 2200);
  };

  return (
    <div className="relative flex flex-col gap-y-5 max-h-fit">
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
          {product.reviewCount > 0 ? (
            <span className="font-poppins text-gray-600">
              {product.reviewCount} Reviews
            </span>
          ) : (
            <span className="font-poppins text-gray-600">No Reviews</span>
          )}
          <span className="text-gray-400">•</span>
          <span className="font-poppins  font-medium text-gray-800">
            SKU:{" "}
            <span className="font-normal text-gray-600">{product.sku}</span>
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3 pb-5 border-b border-gray-200">
        <span className="text-gray-400 line-through text-xl">
          {product.originalPrice && `$${product.originalPrice?.toFixed(2)}`}
        </span>
        <span className="text-2xl font-poppins font-medium text-hard-primary">
          {product.price && `$${product.price?.toFixed(2)}`}
        </span>
      {
        product.discountPercent > 0 && (
          <span className="text-sm font-medium bg-red-50 text-red-500 px-2.5 py-1 rounded-full">
            {product.discountPercent}% Off
          </span>
        )
      }
      </div>

      {/* Brand + share */}
      <div className="flex items-center justify-between flex-wrap gap-4 pb-5 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Brand:</span>
          <img
            src={product.brand.logo}
            alt={product.brand.name}
            className="w-full h-6"
          />
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-9 font-medium font-poppins">Share item:</span>
          <div className="flex items-center gap-2">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#00B712] text-gray-7 hover:text-white transition-all"
              aria-label="Share on Facebook"
            >
              <FaFacebookF className="w-4 h-4 fill-current" />
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#00B712] text-gray-7 hover:text-white transition-all"
              aria-label="Share on Twitter"
            >
              <FaTwitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#00B712] text-gray-7 hover:text-white transition-all"
              aria-label="Share on Pinterest"
            >
        <FaPinterestP/>
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#00B712] text-gray-7 hover:text-white transition-all"
              aria-label="Share on Instagram"
            >
              <FaInstagram className="w-4 h-4 fill-current" />
            </a>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed text-gray-500">
        {product.description}
      </p>

      {/* Quantity + Add to Cart + Favorite */}
      <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
        <QuantitySelector quantity={quantity} onChange={setQuantity} />
        <button
          type="button"
          onClick={handleAddToCart}
          className={`flex-1 flex items-center justify-center gap-2 bg-[#00B712] hover:bg-[#00A010] text-white font-medium rounded-full h-12 md:px-6 transition-colors cursor-pointer`}
        >
          Add to Cart
            <SlHandbag className="text-[15px]" />
          
        </button>
        <button
          type="button"
          onClick={() => setIsFavorite((v) => !v)}
          className={`w-12 h-12 shrink-0 flex items-center justify-center rounded-full transition-all ${
            isFavorite
              ? "bg-[#00B712]/10  text-[#00B712]"
              : "bg-[#20B526]/10 text-[#2C742F] border"
          }`}
          aria-pressed={isFavorite}
          aria-label="Toggle favorite"
        >
          {isFavorite ? (
            <IoMdHeartEmpty className={`w-5 h-5`} />
          ) : (
            <IoIosHeart className={`w-5 h-5 fill-[#00B712]`} />
          )}
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
