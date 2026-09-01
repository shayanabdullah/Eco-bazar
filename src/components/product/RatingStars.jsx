import { Star } from "lucide-react";

/**
 * Renders a row of 5 stars, filled up to `rating`.
 * size: tailwind size classes for the icon (e.g. "w-4 h-4")
 */
export default function RatingStars({ rating = 0, size = "w-4 h-4" }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${size} ${
            i < Math.round(rating)
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700"
          }`}
        />
      ))}
    </div>
  );
}
