import { FaSliders, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import BlogCard from "./BlogCard";

const POSTS_PER_PAGE = 6;

export default function BlogList({
  posts,
  sortBy,
  setSortBy,
  currentPage,
  setCurrentPage,
  totalResults,
  loading,
}) {
  const totalPages = Math.max(
    1,
    Math.ceil((totalResults || 0) / POSTS_PER_PAGE),
  );
  const safePosts = posts || [];
  const startIdx = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = safePosts.slice(startIdx, startIdx + POSTS_PER_PAGE);

  const getPageNumbers = () => {
    const pages = [];
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, start + 4);
    const adjustedStart = Math.max(1, end - 4);
    for (let i = adjustedStart; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  const SkeletonCard = () => (
    <div className="rounded-lg bg-white border border-gray-200 overflow-hidden">
      <div className="aspect-[4/3] bg-gray-200 animate-pulse" />
      <div className="p-5 space-y-3">
        <div className="h-3 w-1/3 bg-gray-200 rounded animate-pulse" />
        <div className="h-5 w-full bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-4/5 bg-gray-200 rounded animate-pulse" />
        <div className="h-8 w-24 bg-gray-200 rounded-full animate-pulse" />
      </div>
    </div>
  );

  return (
    <>
      {/* Sort bar + filter toggle */}
      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="lg:hidden flex items-center gap-2 bg-[#00B712] hover:bg-[#00A010] text-white text-sm font-medium rounded-full px-5 h-10 transition-colors"
          >
            Filter
            <FaSliders className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-gray-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-200 rounded-md h-9 px-3 bg-white text-gray-700 focus:outline-none focus:border-[#00B712]"
            >
              <option value="Latest">Latest</option>
              <option value="Oldest">Oldest</option>
              <option value="Popular">Most Popular</option>
            </select>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-900">
            {totalResults || 0}
          </span>{" "}
          Results Found
        </p>
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {loading
          ? Array.from({ length: POSTS_PER_PAGE }).map((_, i) => (
              <SkeletonCard key={i} />
            ))
          : paginatedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
      </div>

      {/* Empty state */}
      {!loading && paginatedPosts.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-gray-500 text-sm">
            No posts found matching your filters.
          </p>
        </div>
      )}

      {/* Pagination */}
      {!loading && totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-10">
          <button
            type="button"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 disabled:opacity-40 transition-colors"
            aria-label="Previous page"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>

          {pageNumbers[0] > 1 && (
            <>
              <button
                type="button"
                onClick={() => setCurrentPage(1)}
                className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
                  1 === currentPage
                    ? "bg-[#00B712] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                1
              </button>
              {pageNumbers[0] > 2 && <span className="text-gray-400">...</span>}
            </>
          )}

          {pageNumbers.map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => setCurrentPage(num)}
              className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
                num === currentPage
                  ? "bg-[#00B712] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {num}
            </button>
          ))}

          {pageNumbers[pageNumbers.length - 1] < totalPages && (
            <>
              {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
                <span className="text-gray-400">...</span>
              )}
              <button
                type="button"
                onClick={() => setCurrentPage(totalPages)}
                className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
                  currentPage === totalPages
                    ? "bg-[#00B712] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {totalPages}
              </button>
            </>
          )}

          <button
            type="button"
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className="w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 disabled:opacity-40 transition-colors"
            aria-label="Next page"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </>
  );
}
