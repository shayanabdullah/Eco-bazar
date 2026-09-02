import {
  FaTag,
  FaUser,
  FaComment,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLink,
  FaArrowRight,
} from "react-icons/fa6";

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
          By {post.author}
        </span>
        <span className="flex items-center gap-1.5">
          <FaComment className="w-4 h-4" />
          {article.comments?.length ?? post.commentsCount} Comments
        </span>
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-5">
        {article.title}
      </h1>

      {/* Author row + share */}
      <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-gray-200 mb-6">
        <div className="flex items-center gap-3">
          <img
            src={article.writer.avatar}
            alt={article.writer.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-gray-900">
              {article.writer.name}
            </p>
            <p className="text-xs text-gray-400">
              {article.writer.date} • {article.writer.readTime}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#00B712] text-white hover:opacity-90 transition-opacity"
            aria-label="Share on Facebook"
          >
            <FaFacebookF className="w-4 h-4 fill-current" />
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:text-gray-800 transition-colors"
            aria-label="Share on Twitter"
          >
            <FaXTwitter className="w-4 h-4" />
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:text-gray-800 transition-colors"
            aria-label="Share on Instagram"
          >
            <FaInstagram className="w-4 h-4" />
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:text-gray-800 transition-colors"
            aria-label="Copy link"
          >
            <FaLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="space-y-5 text-sm leading-relaxed text-gray-600">
        <p className="font-medium text-gray-800">{article.intro}</p>
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
      </div>

      {/* Promo banner */}
      {article.promo && (
        <div
          className="relative mt-8 rounded-lg overflow-hidden flex items-center justify-between px-8 py-8 bg-cover bg-center"
          style={{ backgroundImage: `url(${article.promo.image})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10">
            <p className="text-xs tracking-widest text-white/70 mb-2">
              {article.promo.eyebrow}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {article.promo.title}
            </h3>
            <button
              type="button"
              className="flex items-center gap-2 bg-[#00B712] hover:bg-[#00A010] text-white text-sm font-medium rounded-full px-5 h-10 transition-colors"
            >
              {article.promo.ctaLabel}
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="relative z-10 text-center text-white">
            <p className="text-xs">{article.promo.discountLabel}</p>
            <p className="text-3xl font-bold text-amber-400">
              {article.promo.discountValue}
            </p>
            <p className="text-xs">{article.promo.discountSuffix}</p>
          </div>
        </div>
      )}
    </div>
  );
}
