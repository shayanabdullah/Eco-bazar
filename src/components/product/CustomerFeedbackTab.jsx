import { useState } from "react";
import ReviewCard from "./ReviewCard";

const PAGE_SIZE = 15;

export default function CustomerFeedbackTab({ reviews }) {

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleReviews = reviews.slice(0, visibleCount);
  const hasMore = visibleCount < reviews.length;

  return (
    <div className="max-w-full">
  {
    reviews.length > 0 ? (
      <div className="">
       <div>
        {visibleReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {hasMore && (
        <button
          type="button"
          onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
          className="mt-6 px-5 py-2.5 rounded-full bg-gray-100 text-gray-400 text-sm font-medium hover:bg-gray-500/20 transition-colors cursor-pointer"
        >
          Load More
        </button>
      )}
   </div>
    ): (
      <div className="">
        <h2 className="text-gray-9  text-xl font-semibold pb-5">Customer Reviews</h2>
        <div className="w-full rounded-lg text-center py-8 bg-[#f9f9f9]  border border-gray-100">
        <p class="text-gray-500 text-base">No reviews yet for this product. Be the first to review!</p>
        </div>
      </div>
    )
  }
    </div>
  );
}
