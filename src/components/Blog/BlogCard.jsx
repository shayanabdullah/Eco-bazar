import { Link } from "react-router";
import {
  FaTag,
  FaUser,
  FaComment,
  FaArrowRight,
  FaPlay,
} from "react-icons/fa6";

export default function BlogCard({ post }) {
  return (
    <article
      className={`bg-white rounded-lg border overflow-hidden transition-colors ${
        post.highlighted ? "border-[#00B712]" : "border-gray-200"
      }`}
    >
      <Link to={`/blog/${post.slug}`} className="relative block">
        <img
          src={post.image}
          alt={post.title}
          className="w-full  object-cover"
        />
        <div className="absolute top-3 left-3 bg-white rounded-md px-2.5 py-1.5 text-center leading-none shadow-sm">
          <span className="block text-sm font-bold text-gray-900">
            {post.day}
          </span>
          <span className="block text-[10px] text-gray-400 tracking-wide">
            {post.month}
          </span>
        </div>
        {post.hasPlayButton && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
              <FaPlay className="w-5 h-5 text-gray-800 ml-0.5" />
            </span>
          </div>
        )}
      </Link>

      <div className="p-5">
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3 ">
          <span className="flex items-center gap-1 ">
            <FaTag className="w-3.5 h-3.5 text-warning" />
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <FaUser className="w-3.5 h-3.5 text-primary" />
            By {post.author}
          </span>
          <span className="flex items-center gap-1">
            <FaComment className="w-3.5 h-3.5 text-primary" />
            {post.commentsCount} Comments
          </span>
        </div>

        <Link
          to={`/blog/${post.slug}`}
          className={`block font-medium leading-snug mb-4 hover:text-[#00B712] transition-colors ${
            post.highlighted ? "text-[#00B712]" : "text-gray-900"
          }`}
        >
          {post.title}
        </Link>

        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#00B712] hover:gap-2.5 transition-all"
        >
          Read More
          <FaArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
