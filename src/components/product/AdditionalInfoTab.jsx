import PromoVideoCard from "./PromoVideoCard";

export default function AdditionalInfoTab({ product }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <dl className="space-y-4">
        {product.specs?.map((spec, i) => (
          <div key={i} className="flex gap-6 text-sm">
            <dt className="w-32 shrink-0 text-gray-5">{spec.label}</dt>
            <dd className="text-gray-8">{spec.value}</dd>
          </div>
        ))}
      </dl>

      <PromoVideoCard video={product.promoVideo} benefits={product.promoBenefits} />
    </div>
  );
}
