import { Play, Percent, Leaf } from "lucide-react";

const ICONS = { percent: Percent, leaf: Leaf };

export default function PromoVideoCard({ video, benefits = [] }) {
  return (
    <div className="flex flex-col gap-4">
      <button
        type="button"
        className="relative rounded-xl overflow-hidden group w-full aspect-[16/10.5]"
        aria-label="Play promotional video"
      >
        <img
          src={video.image}
          alt="Promotional video"
          className="w-full h-full object-cover"
        />
        <span className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="w-14 h-14 rounded-full bg-[#00B712] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <Play className="w-5 h-5 text-white fill-white ml-0.5" />
          </span>
        </span>
      </button>

      <div className="bg-white rounded-xl p-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {benefits.map((benefit, i) => {
          const Icon = ICONS[benefit.icon] ?? Leaf;
          return (
            <div key={i} className="flex items-start gap-3">
              <span className="w-9 h-9 shrink-0 rounded-full border border-[#00B712] text-[#00B712] flex items-center justify-center">
                <Icon className="w-4 h-4" />
              </span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">
                  {benefit.title}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {benefit.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
