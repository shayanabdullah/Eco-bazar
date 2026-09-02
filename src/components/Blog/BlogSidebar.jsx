

import { useState } from "react";
import { FaMagnifyingGlass, FaCalendar } from "react-icons/fa6";
import {
  categories as defaultCategories,
  popularTags as defaultPopularTags,
  galleryImages as defaultGalleryImages,
  recentlyAdded as defaultRecentlyAdded,
} from "../../data/blog";

const formatDate = (item) => {
  if (item?.date) return item.date;
  if (item?.day && item?.month) return `${item.day} ${item.month}`;
  if (item?.timestamp) {
    const d = new Date(item.timestamp);
    return d.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }
  return "";
};

export default function BlogSidebar({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedTag,
  setSelectedTag,
  categories,
  popularTags,
  galleryImages,
  recentPosts,
}) {
  const [localSearch, setLocalSearch] = useState("");
  const [localCategory, setLocalCategory] = useState(null);
  const [localTag, setLocalTag] = useState(null);

  const isControlled = typeof setSearchQuery === "function";
  const search = isControlled ? (searchQuery ?? "") : localSearch;
  const setSearch = isControlled ? setSearchQuery : setLocalSearch;

  const activeCategory = isControlled
    ? (selectedCategory ?? null)
    : localCategory;
  const setActiveCategory = isControlled
    ? (v) => setSelectedCategory(v === activeCategory ? null : v)
    : (v) => setLocalCategory(v === localCategory ? null : v);

  const activeTag = isControlled ? (selectedTag ?? null) : localTag;
  const setActiveTag = isControlled
    ? (v) => setSelectedTag(v === activeTag ? null : v)
    : (v) => setLocalTag(v === activeTag ? null : v);

  const finalCategories = categories || defaultCategories;
  const finalPopularTags = popularTags || defaultPopularTags;
  const finalGallery = galleryImages || defaultGalleryImages;
  const displayedRecentPosts = (
    recentPosts && recentPosts.length > 0 ? recentPosts : defaultRecentlyAdded
  ).slice(0, 3);

  return (
    <aside className="space-y-8">
      {/* Search */}
      <div className="relative">
        <FaMagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="w-full h-11 pl-10 pr-4 rounded-md border border-gray-200 bg-white text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#00B712] transition-colors"
        />
      </div>

      {/* Top Categories */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">Top Categories</h3>
        <ul className="space-y-3">
          {finalCategories.map((cat) => {
            const isActive = cat.name === activeCategory;
            return (
              <li key={cat.name}>
                <button
                  type="button"
                  onClick={() => setActiveCategory(cat.name)}
                  className={`w-full flex items-center justify-between text-sm transition-colors ${
                    isActive
                      ? "text-[#00B712] font-medium"
                      : "text-gray-600 hover:text-[#00B712]"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className="text-gray-400">({cat.count})</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Popular Tag */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">Popular Tag</h3>
        <div className="flex flex-wrap gap-2">
          {finalPopularTags.map((tag) => {
            const isActive = tag === activeTag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  isActive
                    ? "bg-[#00B712] border-[#00B712] text-white"
                    : "bg-transparent border-gray-200 text-gray-600 hover:border-[#00B712] hover:text-[#00B712]"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Our Gallery */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">Our Gallery</h3>
        <div className="grid grid-cols-4 gap-2">
          {finalGallery.map((img, i) => {
            const url = typeof img === "string" ? img : img?.url || "";
            const alt =
              typeof img === "string"
                ? `Gallery ${i + 1}`
                : img?.alt || `Gallery ${i + 1}`;
            return (
              <div
                key={i}
                className="aspect-square rounded-md overflow-hidden bg-white border border-gray-100"
              >
                <img
                  src={url}
                  alt={alt}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Recently Added */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">Recently Added</h3>
        <ul className="space-y-4">
          {displayedRecentPosts.map((item) => (
            <li key={item.id} className="flex items-start gap-3">
              <img
                src={item.image}
                alt={item.title}
                className="w-14 h-14 rounded-md object-cover shrink-0 bg-white border border-gray-100"
              />
              <div>
                <p className="text-sm text-gray-700 leading-snug line-clamp-2 hover:text-[#00B712] cursor-pointer transition-colors">
                  {item.title}
                </p>
                <div className="flex items-center gap-1.5 mt-1.5 text-xs text-gray-400">
                  <FaCalendar className="w-3.5 h-3.5" />
                  <span>{formatDate(item)}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
