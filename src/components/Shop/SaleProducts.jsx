import { FaStar } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Red Capsicum",
    price: 32.0,
    oldPrice: 20.99,
    rating: 5,
    image: "/popular-products/red-pepper.webp",
  },
  {
    id: 2,
    name: "Chanise Cabbage",
    price: 24.0,
    oldPrice: 29.99,
    rating: 4,
    image: "/popular-products/cabbage.webp",
  },
  {
    id: 3,
    name: "Fresh Mango",
    price: 32.0,
    oldPrice: 39.99,
    rating: 5,
    image: "/popular-products/mango.webp",
  },
];

const ProductCard = ({ product }) => (
  <div className="flex items-center gap-x-3 p-3 rounded-xl border border-gray-2 hover:border-primary hover:shadow-md transition-shadow duration-200 cursor-pointer group">
    <img
      src={product.image}
      alt={product.name}
      className="w-14 h-14 rounded-lg object-cover shrink-0"
    />

    <div className="flex flex-col gap-y-1">
      <p className="text-sm font-poppins text-[#1A1A1A] group-hover:text-primary transition-colors">
        {product.name}
      </p>

      <div className="flex items-center gap-x-2">
        <span className="text-sm font-poppins font-medium text-primary">
          ${product.price.toFixed(2)}
        </span>
        <span className="text-xs font-poppins text-[#B0B0B0] line-through">
          ${product.oldPrice.toFixed(2)}
        </span>
      </div>

      <div className="flex items-center gap-[2px]">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            size={11}
            className={i < product.rating ? "text-[#F5A623]" : "text-[#DADADA]"}
          />
        ))}
      </div>
    </div>
  </div>
);

const SaleProducts = () => {
  return (
    <div className="py-5  border-t border-gray-2">
      <h3 className="font-poppins font-medium text-xl text-[#1A1A1A] mb-4">
        Sale Products
      </h3>

      <div className="flex flex-col gap-y-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SaleProducts;
