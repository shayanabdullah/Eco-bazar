import RatingStars from "./RatingStars";

export default function ReviewCard({ review }) {
  const initials = review.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <div className="py-5 border-b border-gray-200 dark:border-gray-800 last:border-b-0">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          {review.avatar ? (
            <img
              src={review.avatar}
              alt={review.name}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-500">
              {initials}
            </div>
          )}
          <div>
            <p className="font-semibold text-sm text-gray-900">
              {review.name}
            </p>
            <RatingStars rating={review.rating} size="w-3.5 h-3.5" />
          </div>
        </div>
        <span className="text-xs text-gray-400 shrink-0">{review.date}</span>
      </div>
      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
        {review.text}
      </p>
    </div>
  );
}
