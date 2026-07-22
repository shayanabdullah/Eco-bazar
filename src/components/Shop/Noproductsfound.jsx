import { useEffect, useState } from "react";
import {
  FaShoppingBasket,
  FaThLarge,
  FaSearch,
  FaLeaf,
  FaFilter,
} from "react-icons/fa";

/**
 * NoProductsFound
 * Premium, on-brand empty state for the EcoBazar shop page — shown
 * when filters/search return zero products. Built with the same
 * tokens used across the rest of the shop (font-poppins, primary
 * green, gray-2/gray-6/gray-9, rounded-2xl/3xl, soft shadows).
 *
 * Props:
 * - onClearFilters:      function — "Clear Filters" (primary button + suggestion card)
 * - onBrowseCategories:  function — "Browse Categories" suggestion card
 * - onSearchAgain:       function — "Try Another Search" suggestion card
 * - onContinueShopping:  function — "Continue Shopping" (secondary button)
 */
const suggestions = [
  {
    id: 1,
    icon: <FaFilter size={16} />,
    title: "Clear Filters",
    description: "Remove all active filters.",
    action: "onClearFilters",
  },
  {
    id: 2,
    icon: <FaThLarge size={16} />,
    title: "Browse Categories",
    description: "Discover all available products.",
    action: "onBrowseCategories",
  },
  {
    id: 3,
    icon: <FaSearch size={16} />,
    title: "Try Another Search",
    description: "Search using different keywords.",
    action: "onSearchAgain",
  },
];

const NoProductsFound = ({
  onClearFilters,
  onBrowseCategories,
  onSearchAgain,
  onContinueShopping,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const handlers = { onClearFilters, onBrowseCategories, onSearchAgain };

  return (
    <section
      aria-label="No products found"
      className="relative w-full flex items-   justify-center px-4 py-4"
    >
      {/* decorative blurred background circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 -left-10 w-56 h-56 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
      />

      <div
        className={`relative w-full max-w-[700px] bg-white rounded-3xl border border-gray-2 shadow-sm hover:shadow-lg transition-all duration-500 ease-out px-6 py-12 sm:px-12 sm:py-16 text-center overflow-hidden ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* subtle inner gradient wash */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/[0.04] via-transparent to-transparent"
        />

        {/* tiny leaf accents, opposite corners */}
        <FaLeaf
          aria-hidden="true"
          className="hidden sm:block absolute top-5 left-5 text-primary/20"
          size={18}
        />
        <FaLeaf
          aria-hidden="true"
          className="hidden sm:block absolute bottom-5 right-5 text-primary/20 rotate-180"
          size={18}
        />

        <div className="relative flex flex-col items-center">
          {/* illustration */}
          <div className="relative mb-5 animate-[float_3.5s_ease-in-out_infinite]">
            <img
              src="https://placehold.co/220x220/E9F7EA/00B207?text=Empty+Basket"
              alt="Illustration of an empty shopping basket"
              className="w-36 sm:w-44 md:w-48 h-auto rounded-2xl"
            />
            {/* decorative brand circle */}
            <span className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-primary flex items-center justify-center shadow-md">
              <FaShoppingBasket className="text-white" size={14} />
            </span>
          </div>

          <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-gray-9">
            No Products Found
          </h2>

          <p className="font-poppins text-sm sm:text-base text-gray-6 max-w-md mt-3 leading-relaxed">
            We couldn&apos;t find any products matching your current filters or search.
          </p>

          <p className="font-poppins text-xs sm:text-sm text-gray-5 mt-2">
            Try: removing some filters, choosing another category, or searching with different keywords.
          </p>

          {/* suggestion cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8 text-left">
            {suggestions.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={handlers[item.action]}
                className="group flex flex-col gap-y-2 rounded-2xl border border-primary/20 bg-primary/5 p-4 hover:-translate-y-1 hover:shadow-md hover:border-primary/40 transition-all duration-200 cursor-pointer"
              >
                <span className="w-8 h-8 rounded-full bg-white border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                  {item.icon}
                </span>
                <span className="font-poppins text-sm font-medium text-gray-9">
                  {item.title}
                </span>
                <span className="font-poppins text-xs text-gray-6">
                  {item.description}
                </span>
              </button>
            ))}
          </div>

          {/* action buttons */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <button
              type="button"
              onClick={onClearFilters}
              aria-label="Clear all filters"
              className="w-full sm:w-auto bg-primary text-white font-poppins text-sm font-medium px-7 py-3 rounded-full shadow-sm hover:bg-[#059606] hover:shadow-md hover:scale-105 active:scale-100 transition-all duration-200 cursor-pointer"
            >
              Clear Filters
            </button>
            <button
              type="button"
              onClick={onContinueShopping}
              aria-label="Continue shopping"
              className="w-full sm:w-auto border border-primary text-primary font-poppins text-sm font-medium px-7 py-3 rounded-full hover:bg-primary/5 hover:scale-105 active:scale-100 transition-all duration-200 cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>

      {/* local keyframes for the illustration's floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
};

export default NoProductsFound;