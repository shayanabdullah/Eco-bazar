import ProductCard from "../common/ProductCard";


export default function RelatedProducts({ products = [] }) {
  return (
    <section className="mt-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 cursor-pointer font-poppins">
        Related Products
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </div>
    </section>
  );
}
