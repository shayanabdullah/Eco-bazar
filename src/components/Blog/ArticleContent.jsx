import {
  FaTag,
  FaUser,
  FaComment,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLink,
} from "react-icons/fa6";
import { Link } from "react-router";

export default function ArticleContent({ post, article }) {
  return (
    <div>
      {/* Hero image */}
      <img
        src={article.heroImage}
        alt={article.title}
        className="w-full aspect-[16/8] object-cover rounded-lg bg-white mb-6"
      />

      {/* Meta row */}
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
        <span className="flex items-center gap-1.5">
          <FaTag className="w-4 h-4" />
          {post.category}
        </span>
        <span className="flex items-center gap-1.5">
          <FaUser className="w-4 h-4" />
          By {post.author || 'Super Admin'}
        </span>
        <span className="flex items-center gap-1.5">
          <FaComment className="w-4 h-4" />
          {article.comments?.length ?? post.commentsCount} Comments
        </span>
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug mb-5 font-poppins">
        {article.title}
      </h1>

      {/* Author row + share */}
      <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-gray-200 mb-6">
        <div className="flex items-center gap-3">
          <img
            src={article.writer.avatar || 'https://i.pravatar.cc/150?img=8'}
            alt={article.writer.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-gray-900">
              {article.writer.name || 'Unknown'}
            </p>
            <p className="text-xs text-gray-400">
              {article.writer.date || '09/09/2026'} • {article.writer.readTime || '10 min read'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#00B712] hover:text-white text-gray-500 hover:opacity-90 transition-all"
            aria-label="Share on Facebook"
          >
            <FaFacebookF className="w-4 h-4 fill-current" />
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#00B712] hover:text-white text-gray-500 hover:opacity-90 transition-all"
            aria-label="Share on Twitter"
          >
            <FaXTwitter className="w-4 h-4" />
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#00B712] hover:text-white text-gray-500 hover:opacity-90 transition-all"
            aria-label="Share on Instagram"
          >
            <FaInstagram className="w-4 h-4" />
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#00B712] hover:text-white text-gray-500 hover:opacity-90 transition-all"
            aria-label="Copy link"
          >
            <FaLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="space-y-5 text-sm leading-relaxed text-gray-600">
        <p className="prose max-w-none text-gray-600! text-[15px] leading-relaxed space-y-6 mb-8 font-bold">
          {article.intro}
        </p>

        {article.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        {article.inlineImages?.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
            {article.inlineImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${article.title} illustration ${i + 1}`}
                className="w-full aspect-[4/3] object-cover rounded-lg bg-white"
              />
            ))}
          </div>
        )}

        {article.closingParagraph && <p>{article.closingParagraph}</p>}
        {/* tags */}
        {post.tags?.length > 0 && (
          <div className="flex items-center gap-3 mt-8 mb-12 border-t border-gray-100 pt-6">
            <span className="font-semibold text-sm text-gray-900">Tags:</span>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-gray-600 px-3 py-1 text-xs rounded-full cursor-pointer hover:bg-[#00B207] hover:text-white transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Promo banner */}
      {article.promo && (
        <div className="relative overflow-hidden rounded-lg group">
          <Link to="/shop">
            <img
              src={article.promo.image}
              alt=""
              className="object-cover cursor-pointer group-hover:scale-102 transition-transform duration-300"
            />
          </Link>
        </div>
      )}
    </div>
  );
}
