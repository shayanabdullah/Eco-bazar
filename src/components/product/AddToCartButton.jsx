import { ShoppingBag } from "lucide-react";

export default function AddToCartButton({ onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 flex items-center justify-center gap-2 bg-[#00B712] hover:bg-[#00A010] text-white font-medium rounded-full h-12 px-6 transition-colors ${className}`}
    >
      Add to Cart
      <ShoppingBag className="w-4 h-4" />
    </button>
  );
}
