import { IoStar } from "react-icons/io5";

export default function RatingStars({ rating = 0, size = "w-4 h-4" }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <IoStar 
          key={i}
          className={`${size} ${
            i < Math.round(rating)
              ? "fill-warning text-warning"
              : "fill-gray-400 text-gray-400"
          }`}
        />
      ))}
    </div>
  );
}
