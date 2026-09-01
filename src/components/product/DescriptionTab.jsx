import { Check } from "lucide-react";
import PromoVideoCard from "./PromoVideoCard";

export default function DescriptionTab({ product }) {
  const { paragraphs, checklist, closingParagraph } = product.descriptionTab;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
      <div className="space-y-5 text-sm leading-relaxed text-gray-60">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        <ul className="space-y-3">
          {checklist.map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="w-5 h-5 shrink-0 rounded-full bg-[#00B712] text-white flex items-center justify-center">
                <Check className="w-3 h-3" />
              </span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        {closingParagraph && <p>{closingParagraph}</p>}
      </div>

      <PromoVideoCard video={product.promoVideo} benefits={product.promoBenefits} />
    </div>
  );
}
