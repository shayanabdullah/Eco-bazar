import { Minus, Plus } from "lucide-react";

export default function QuantitySelector({ quantity, onChange }) {
  const decrement = () => onChange(Math.max(1, quantity - 1));
  const increment = () => onChange(quantity + 1);

  return (
    <div className="flex items-center border rounded-full px-1.5 py-1.5 shrink-0">
      <button
        type="button"
        onClick={decrement}
        disabled={quantity <= 1}
        className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-transparent transition-colors" 
        aria-label="Decrease quantity"
      >
        <Minus className="w-4 h-4" />
      </button>
          <span className="w-9 text-center font-medium text-gray-900 select-none">
        {quantity}
      </span>
      <button
        type="button"
        onClick={increment}
        className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 transition-colors" 
        aria-label="Increase quantity"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
}
