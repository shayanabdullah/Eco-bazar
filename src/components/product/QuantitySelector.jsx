import { Minus, Plus } from "lucide-react";

export default function QuantitySelector({ quantity, onChange }) {
  const decrement = () => onChange(Math.max(1, quantity - 1));
  const increment = () => onChange(quantity + 1);

  return (
    <div className="flex items-center gap-x-1 border border-gray-1 rounded-full p-2 shrink-0">
      <button
        type="button"
        onClick={decrement}
        disabled={quantity <= 1}
        className="p-2  flex items-center justify-center rounded-full text-gray-9 bg-gray-1 disabled:opacity-40 disabled:hover:bg-transparent transition-colors cursor-pointer" 
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
        className="p-2  flex items-center justify-center rounded-full text-gray-9 bg-gray-1 disabled:opacity-40 disabled:hover:bg-transparent transition-colors cursor-pointer" 
        aria-label="Increase quantity"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
}
