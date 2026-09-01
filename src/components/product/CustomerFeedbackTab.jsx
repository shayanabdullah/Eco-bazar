import { useState } from "react";
import ReviewCard from "./ReviewCard";

const PAGE_SIZE = 4;

export default function CustomerFeedbackTab({ reviews }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleReviews = reviews.slice(0, visibleCount);
  const hasMore = visibleCount < reviews.length;

  return (
    <div className="max-w-2xl">
      <div>
        {visibleReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {hasMore && (
        <button
          type="button"
          onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
          className="mt-6 px-5 py-2.5 rounded-full bg-[#00B712]/10 text-[#00B712] text-sm font-medium hover:bg-[#00B712]/20 transition-colors"
        >
          Load More
        </button>
      )}
    </div>
  );
}
