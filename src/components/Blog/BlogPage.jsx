import { useState, useMemo, useEffect } from "react";
import BlogSidebar from "./BlogSidebar";
import BlogList from "./BlogList";
import { blogPosts, popularTags, galleryImages } from "../../data/blog";
import { FaChevronRight, FaHouse } from "react-icons/fa6";

export default function BlogPage() {
  const posts = blogPosts;

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [sortBy, setSortBy] = useState("Latest");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Categories
  const categories = useMemo(() => {
    const counts = {};

    blogPosts.forEach((post) => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });

    return Object.keys(counts).map((category) => ({
      name: category,
      count: counts[category],
    }));
  }, []);

  // Loading + page reset on filter change
  useEffect(() => {
    setLoading(true);
    setCurrentPage(1);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [searchQuery, selectedCategory, selectedTag, sortBy]);

  // Filter & Sort
  const filteredPosts = useMemo(() => {
    let result = [...posts];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();

      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(q) ||
          post.summary.toLowerCase().includes(q) ||
          post.category.toLowerCase().includes(q),
      );
    }

    if (selectedCategory) {
      result = result.filter((post) => post.category === selectedCategory);
    }

    if (selectedTag) {
      result = result.filter((post) => post.tags?.includes(selectedTag));
    }

    if (sortBy === "Latest") {
      result.sort((a, b) => b.timestamp - a.timestamp);
    }

    if (sortBy === "Oldest") {
      result.sort((a, b) => a.timestamp - b.timestamp);
    }

    if (sortBy === "Popular") {
      result.sort((a, b) => b.commentsCount - a.commentsCount);
    }

    return result;
  }, [posts, searchQuery, selectedCategory, selectedTag, sortBy]);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-poppins">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-4 px-4 sm:px-8">
        <div className="max-w-330 mx-auto flex items-center gap-2 text-xs text-gray-500">
          <button
            onClick={() => {
              window.location.href = "/";
            }}
            aria-label="Home"
            className="hover:text-emerald-600 transition-colors flex items-center"
          >
            <FaHouse className="w-3.5 h-3.5" />
          </button>

          <FaChevronRight className="w-3.5 h-3.5 text-gray-400" />

          <span className="text-emerald-600 font-medium">Blog</span>
        </div>
      </div>

      {/* Main */}
      <main className="max-w-330 mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <BlogSidebar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
              categories={categories}
              popularTags={popularTags}
              galleryImages={galleryImages}
              recentPosts={posts}
            />
          </div>

          {/* Blog List */}
          <div className="lg:col-span-9">
            <BlogList
              posts={filteredPosts}
              sortBy={sortBy}
              setSortBy={setSortBy}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              loading={loading}
              totalResults={filteredPosts.length}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
